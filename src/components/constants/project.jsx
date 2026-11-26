const project = [
    {
        name: "Full Stack Social Media Post Automation System",
        mark: "SM",
        briefDesc: "A full-stack platform for connecting social accounts and publishing content from one dashboard.",
        desc: [
            "Built reusable React components for post creation, social account connections, guided onboarding, and post status tracking.",
            "Implemented OAuth flows to connect platforms such as LinkedIn and Instagram.",
            "Created Django REST Framework APIs for creating, publishing, retrying, and tracking posts through queued, publishing, published, and failed states.",
            "Used Celery and Redis for asynchronous publishing, retry handling, and long-running social API requests.",
            "Added editable failed posts and one-click retry actions."
        ],
        tech: ["React", "Python", "Django", "Django REST Framework", "PostgreSQL", "Celery", "Redis", "OAuth"],
        githubLink: "",
        liveLink: "",
        previewImages: []
    },
    {
        name: "Property NFT - Blockchain-Based Real Estate Marketplace",
        mark: "NFT",
        briefDesc: "A real estate marketplace for buying, selling, and renting properties with NFT-based ownership and rental rights.",
        desc: [
            "Tokenized each property into 52 weekly NFTs, with each token representing time-based rental rights.",
            "Developed Solidity smart contracts for NFT minting, ownership tracking, transfers, and property transactions.",
            "Integrated MetaMask and Web3 for wallet connections and authorized smart-contract transactions.",
            "Built Django REST Framework APIs with PostgreSQL for user accounts, property listings, transaction records, and application data."
        ],
        tech: ["Python", "Django", "Django REST Framework", "React", "PostgreSQL", "Ethereum", "Solidity", "MetaMask", "Web3"],
        githubLink: "",
        liveLink: "",
        previewImages: []
    }
]

export {project};
