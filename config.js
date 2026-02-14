// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

const CONFIG = {
    // Your Valentine's name that will appear in the title
    // Example: "Jade", "Sarah", "Mike"
    valentineName: "Callie, mi sol ☀️",

    // The title that appears in the browser tab
    // You can use emojis! 💝 💖 💗 💓 💞 💕
    pageTitle: "¿Will You Be Mi Valentine, Callie? 💝🌞",

    // Floating emojis that appear in the background
    // Find more emojis at: https://emojipedia.org
    floatingEmojis: {
        hearts: ['❤️', '💖', '💝', '💗', '💓', '💕', '🌞', '☀️'],  // Added sun emojis for Callie
        bears: ['🧸', '🐻', '🌵', '🌺']                       // Added Spanish flair with cactus and hibiscus
    },

    // Questions and answers
    // Customize each question and its possible responses
    questions: {
        first: {
            text: "¿Do you like me?",                                    // First interaction with Spanglish
            yesBtn: "Sí",                                             // Text for "Yes" button
            noBtn: "No",                                               // Text for "No" button
            secretAnswer: "I don't like you. I love you! ❤️"           // Secret hover message
        },
        second: {
            text: "¿How much Baby?",                          // For the love meter
            startText: "This much!",                                   // Text before the percentage
            nextBtn: "Next ❤️"                                         // Text for the next button
        },
        third: {
            text:  "mi Callie... ¿Will you be my Valentine on February 14th, 2026? 🌹☀️", // The big question!
            yesBtn: "Yes",                                             // Text for "Yes" button
            noBtn: "No"                                                 // Text for "No" button
        }
    },

    // Love meter messages
    // They show up depending on how far they slide the meter
    loveMessages: {
        extreme: "¡Dios mío!that much??🥰",  // Shows when they go past 5000%
        high: "¡Eres mi luz, mi sol, mi todo! ☀️💝",              // Shows when they go past 1000%
        normal: "¡And beyond! 🥰☀️"                           // Shows when they go past 100%
    },

    // Messages that appear after they say "Yes!"
    celebration: {
        title: "Yay! I'm the luckiest guy on earth today :",
        message: "I need to come bring you your gift in person, a big warm hug and a huge kiss",
        emojis: "💋❤️🌞☀️🌺💃"  // Added Spanish flair with sun and hibiscus
    },

    // Color scheme inspired by the sun ☀️
    // Use https://colorhunt.co or https://coolors.co to find beautiful color combinations
    colors: {
        backgroundStart: "#ffb347",      // Warm sunrise orange
        backgroundEnd: "#ffcc80",        // Soft sunny yellow
        buttonBackground: "#ff6b4a",     // Warm terracotta
        buttonHover: "#ff8a5c",          // Lighter terracotta
        textColor: "#c44536"             // Rich warm brown
    },

    // Animation settings
    // Adjust these if you want faster/slower animations
    animations: {
        floatDuration: "15s",           // How long it takes hearts to float up (10-20s recommended)
        floatDistance: "50px",          // How far hearts move sideways (30-70px recommended)
        bounceSpeed: "0.5s",            // Speed of bouncing animations (0.3-0.7s recommended)
        heartExplosionSize: 1.5         // Size of heart explosion effect (1.2-2.0 recommended)
    },

    // Background Music with Latin vibes (Optional)
    // Add your own music URL after getting proper licenses
    music: {
        enabled: false,                     // Music feature is enabled
        autoplay: true,                    // Try to autoplay (note: some browsers may block this)
        musicUrl: "https://res.cloudinary.com/dncywqfpb/video/upload/v1738399057/music_qrhjvy.mp3", // Music streaming URL
        startText: "🎵 ¡Cantar para mi sol!",        // Button text to start music
        stopText: "🔇 Silencio, mi amor",         // Button text to stop music
        volume: 0.5                        // Volume level (0.0 to 1.0)
    }
};

// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG;