const config: Config = {
    mode: 'AI_PAINTING_ANIME', //'DIFFERENT_DIMENSION_ME' | 'AI_PAINTING_ANIME' | 'AIGCSDK_AI_PAINTING_ANIME'
    botToken: '5993113260:AAHr2H6Ja8_Gp-PjxezR68hZO0mgafGWd5A',
    keepFiles: {
        compared: true,
        input: true,
        single: true,
        video: true,
    },
    messages: {
        blocked: 'This bot is maintenance, please try again in a few moments.',
        hello: 'Hi There 👋 \nSend me a photo to convert it into a 2D anime art.',
        media: 'Via @AnimeAiToanimeBot',
        received: '`Processing...`',
    },
    sendMedia: {
        compared: true, // works only with DIFFERENT_DIMENSION_ME (high rate limits) and AI_PAINTING_ANIME (high rate limits)
        single: true, // works only with AIGCSDK_AI_PAINTING_ANIME (fast) and AI_PAINTING_ANIME (slow + high rate limits)
        video: true, // works only with AI_PAINTING_ANIME (slow + high rate limits)
    },
    parallelRequests: 10,
    // Uncomment the line below and set your proxy if you need it.
    proxyUrl: 'socks5://134.195.90.170:32127',
};

export default config;
