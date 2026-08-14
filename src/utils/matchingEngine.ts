import { Item, MatchScore } from '../types';

export function calculateMatchScore(lostItem: Item, foundItem: Item): MatchScore {
  let score = 0;
  const breakdown = {
    categoryMatch: false,
    titleSimilarity: 0,
    locationProximityScore: 0,
    dateScore: 0,
    colorFeatureScore: 0,
  };

  // 1. Category comparison (30 pts)
  if (lostItem.category === foundItem.category) {
    breakdown.categoryMatch = true;
    score += 30;
  }

  // 2. Text/Keyword similarity on title & description (35 pts)
  const extractTokens = (text: string) => {
    return text
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, ' ')
      .split(/\s+/)
      .filter((w) => w.length > 2 && !['the', 'and', 'with', 'for', 'this', 'that', 'from', 'near', 'found', 'lost'].includes(w));
  };

  const lostTokens = new Set([
    ...extractTokens(lostItem.title),
    ...extractTokens(lostItem.description),
    ...(lostItem.identifyingFeatures ? extractTokens(lostItem.identifyingFeatures) : []),
    ...lostItem.tags.map((t) => t.toLowerCase()),
  ]);

  const foundTokens = new Set([
    ...extractTokens(foundItem.title),
    ...extractTokens(foundItem.description),
    ...(foundItem.identifyingFeatures ? extractTokens(foundItem.identifyingFeatures) : []),
    ...foundItem.tags.map((t) => t.toLowerCase()),
  ]);

  const commonKeywords: string[] = [];
  lostTokens.forEach((token) => {
    if (foundTokens.has(token)) {
      commonKeywords.push(token);
    }
  });

  const unionSize = Math.max(1, new Set([...lostTokens, ...foundTokens]).size);
  const jaccard = (commonKeywords.length / unionSize) * 100;
  const textScore = Math.min(35, Math.round(commonKeywords.length * 9 + jaccard * 0.4));
  breakdown.titleSimilarity = textScore;
  score += textScore;

  // 3. Location proximity / City matching (20 pts)
  let locScore = 0;
  const lostCity = lostItem.location.city.toLowerCase().trim();
  const foundCity = foundItem.location.city.toLowerCase().trim();
  const lostLocName = lostItem.location.name.toLowerCase();
  const foundLocName = foundItem.location.name.toLowerCase();

  if (lostCity === foundCity) {
    locScore += 10;
    // Check if venue or campus words overlap
    const locTokens = extractTokens(lostLocName);
    const hasVenueOverlap = locTokens.some((tok) => foundLocName.includes(tok));
    if (hasVenueOverlap) {
      locScore += 10;
    }
  }
  breakdown.locationProximityScore = locScore;
  score += locScore;

  // 4. Date Proximity (15 pts)
  let dateScore = 0;
  try {
    const lostDate = new Date(lostItem.date).getTime();
    const foundDate = new Date(foundItem.date).getTime();
    const diffDays = Math.abs(foundDate - lostDate) / (1000 * 60 * 60 * 24);

    if (diffDays <= 1) {
      dateScore = 15;
    } else if (diffDays <= 3) {
      dateScore = 12;
    } else if (diffDays <= 7) {
      dateScore = 8;
    } else if (diffDays <= 14) {
      dateScore = 4;
    }
  } catch {
    dateScore = 5;
  }
  breakdown.dateScore = dateScore;
  score += dateScore;

  // 5. Special boost if explicitly linked via matchedItemId
  if (lostItem.matchedItemId === foundItem.id || foundItem.matchedItemId === lostItem.id) {
    score = Math.max(87, score);
  }

  const finalScore = Math.min(99, Math.max(10, score));

  return {
    lostItem,
    foundItem,
    overallScore: finalScore,
    breakdown,
    commonKeywords: Array.from(new Set(commonKeywords)).slice(0, 6),
  };
}

export function findMatchesForItem(targetItem: Item, allItems: Item[]): MatchScore[] {
  const matches: MatchScore[] = [];

  const candidates = allItems.filter((i) => {
    // A lost item matches with found items, and vice versa
    if (i.id === targetItem.id) return false;
    return targetItem.type === 'lost' ? i.type === 'found' : i.type === 'lost';
  });

  for (const candidate of candidates) {
    const lost = targetItem.type === 'lost' ? targetItem : candidate;
    const found = targetItem.type === 'found' ? targetItem : candidate;
    const match = calculateMatchScore(lost, found);

    // Only surface matches with a significant score or matched category
    if (match.overallScore >= 45 || match.lostItem.matchedItemId === match.foundItem.id) {
      matches.push(match);
    }
  }

  return matches.sort((a, b) => b.overallScore - a.overallScore);
}

export function getAllSystemMatches(items: Item[]): MatchScore[] {
  const lostItems = items.filter((i) => i.type === 'lost');
  const foundItems = items.filter((i) => i.type === 'found');
  const allMatches: MatchScore[] = [];

  for (const lost of lostItems) {
    for (const found of foundItems) {
      const match = calculateMatchScore(lost, found);
      if (match.overallScore >= 50 || lost.matchedItemId === found.id) {
        allMatches.push(match);
      }
    }
  }

  return allMatches.sort((a, b) => b.overallScore - a.overallScore);
}
