const { createApp } = Vue;

createApp({
    data() {
        return {
            message: `Benvenuto nella pagina!`,
            image: `https://static1.srcdn.com/wordpress/wp-content/uploads/2024/02/elden-ring-shadow-of-the-erdtree-dlc-messmer-the-impaler.jpg`
        }
    }
}).mount("#app")