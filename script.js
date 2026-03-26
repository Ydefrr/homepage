// 1. 数据配置对象（低耦合的核心）
const CONFIG = {
    profile: {
        name: "Joway",
        avatarUrl: "https://via.placeholder.com/150", // 替换为你图片的实际路径
        oldLocation: "Shanghai",
        currentLocation: "Singapore",
        jobTitle: "Infrastructure Engineer",
        jobEmoji: "👨‍💻"
    },
    roles: [
        { label: "Blogger", emoji: "📝" },
        { label: "Photographer", emoji: "📷" },
        { label: "Traveler", emoji: "🌍" }
    ],
    social: [
        { platform: "github", url: "https://github.com/joway", icon: "fa-brands fa-github" },
        { platform: "instagram", url: "#", icon: "fa-brands fa-instagram" },
        { platform: "twitter", url: "#", icon: "fa-brands fa-x-twitter" }
    ],
    projectLink: "https://your-portfolio.com"
};

// 2. 渲染函数
function initProfile() {
    // 设置头像
    document.getElementById('avatar').src = CONFIG.profile.avatarUrl;

    // 设置问候语
    document.getElementById('intro-greeting').textContent = `Hi, folks, I'm ${CONFIG.profile.name}.`;

    // 设置位置与工作 (带删除线效果)
    const locationWorkEl = document.getElementById('location-work');
    locationWorkEl.innerHTML = `
        I live in <span class="del-text">${CONFIG.profile.oldLocation}</span>
        ${CONFIG.profile.currentLocation} and work as an
        ${CONFIG.profile.jobTitle} ${CONFIG.profile.jobEmoji} .
    `;

    // 设置角色列表
    const rolesListEl = document.getElementById('roles-list');
    const rolesHtml = CONFIG.roles.map((role, index) => {
        const isLast = index === CONFIG.roles.length - 1;
        return `<strong>${role.label}</strong> ${role.emoji}${isLast ? ' .' : ' , '}`;
    }).join('');
    rolesListEl.innerHTML = `I am also a ${rolesHtml}`;

    // 设置项目链接
    document.getElementById('project-link').href = CONFIG.projectLink;

    // 渲染社交图标
    const socialContainer = document.getElementById('social-container');
    CONFIG.social.forEach(item => {
        const link = document.createElement('a');
        link.href = item.url;
        link.target = "_blank";
        link.innerHTML = `<i class="${item.icon}"></i>`;
        socialContainer.appendChild(link);
    });
}

// 执行初始化
document.addEventListener('DOMContentLoaded', initProfile);