export function generateSessionSummary(counselorName: string, issues: string[]): string {
    const issueText = issues.join(', ');

    return `Based on your initial assessment, we've identified that you're looking for support with ${issueText}. 

${counselorName} has been assigned as your primary counselor because their expertise in these areas and their communication style align well with your preferences.

Recommended Next Step: Schedule a 15-minute introductory call to establish a connection and discuss a personalized care plan.`;
}
