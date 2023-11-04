export const getAllCompaigns = async (charityContract) => {
    const campaignCount = await charityContract.getCampaignCount();
    const campaigns = [];
    for (var i = 0; i < campaignCount; i++) {
        const campaign = await charityContract.campaigns(i);
        campaigns.push(campaign);
    }
    return campaigns
};


export const getCampaignCount = async (charityContract) => {
    const campaignCount = await charityContract.getCampaignCount();
    return parseInt(campaignCount);
};

