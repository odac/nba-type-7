export const marketTrends = {
  Tech: {
    trend: "Global chip shortage and increased demand for cloud services.",
    news: "Reuters: Chipmakers are struggling to meet demand, leading to production delays across various sectors. Cloud service providers are expanding their infrastructure to support the remote work boom.",
    nba: "Offer supply chain financing to secure semiconductor inventory. Propose FX hedging solutions for international component purchases.",
    conversationStarter:
      "Given the current chip shortage, how is your company navigating supply chain challenges? We have some thoughts on how we can help.",
  },
  Manufacturing: {
    trend: "Shift towards sustainable manufacturing and automation.",
    news: "IndustryWeek: Manufacturers are increasingly adopting green technologies and robotics to improve efficiency and reduce their carbon footprint.",
    nba: "Finance new 'green' machinery with our sustainable asset financing program. Introduce them to our automation and robotics advisory partners.",
    conversationStarter:
      "We're seeing a big push towards sustainable manufacturing. Are you exploring any new green technologies or automation solutions we could help finance?",
  },
  Energy: {
    trend: "Rapid growth in renewable energy sources and grid modernization.",
    news: "Bloomberg: Investment in renewable energy is at an all-time high, with a focus on solar, wind, and battery storage solutions.",
    nba: "Offer project financing for a new solar or wind farm. Provide bridge loans for grid modernization projects.",
    conversationStarter:
      "The growth in renewables is accelerating. Are you planning any new projects to expand your renewable energy portfolio that we could partner on?",
  },
};

export const getPriorityClients = (clients) => {
  const getInsight = (client) => {
    if (client.industry === "Tech")
      return "High demand for cloud services and ongoing chip shortage.";
    if (client.industry === "Energy")
      return "Significant growth in renewable energy projects.";
    return "Opportunities in sustainable manufacturing and automation.";
  };

  const calculatePriority = (client) => {
    let score = client.priorityScore;
    if (marketTrends[client.industry]) {
      score += 10; // Boost score for clients in trending industries
    }
    return score;
  };

  const sortedClients = [...clients]
    .map((c) => ({ ...c, calculatedScore: calculatePriority(c) }))
    .sort((a, b) => b.calculatedScore - a.calculatedScore);

  return sortedClients.slice(0, 3).map((client) => ({
    ...client,
    aiInsight: getInsight(client),
  }));
};