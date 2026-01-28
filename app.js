// 1. 初始化页面内容
document.addEventListener('DOMContentLoaded', () => {
    loadHero();
    loadExperience();
    loadProjects();
    loadSkills();
});

// 2. 渲染 Hero
function loadHero() {
    document.getElementById('hero-name').innerText = portfolioData.profile.name;
    document.getElementById('hero-tagline').innerText = portfolioData.profile.tagline;
}

// 3. 渲染经历卡片 (自动生成 HTML)
function loadExperience() {
    const container = document.getElementById('experience-list');
    portfolioData.experience.forEach(exp => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${exp.role} @ ${exp.company}</h3>
            <span class="date">${exp.period}</span>
            <p>${exp.summary}</p>
            <div class="tags">${exp.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        `;
        container.appendChild(card);
    });
}

// 4. 渲染项目卡片
function loadProjects() {
    const container = document.getElementById('project-list');
    portfolioData.projects.forEach(proj => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${proj.title}</h3>
            <p>${proj.summary}</p>
            <div class="tags">${proj.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
        `;
        container.appendChild(card);
    });
}

// 5. ★★★ 核心功能：渲染技能并处理点击事件 ★★★
function loadSkills() {
    const container = document.getElementById('skill-cloud');
    
    portfolioData.skills.forEach(skill => {
        const btn = document.createElement('button');
        btn.className = 'skill-btn';
        btn.innerText = skill.name;
        
        // 点击事件：寻找证据
        btn.onclick = () => showEvidence(skill.name);
        
        container.appendChild(btn);
    });
}

// 6. ★★★ 核心逻辑：寻找并展示证据 ★★★
function showEvidence(skillName) {
    const evidenceList = document.getElementById('evidence-list');
    const displayArea = document.getElementById('evidence-display');
    const skillNameSpan = document.getElementById('selected-skill-name');
    
    // 清空旧数据
    evidenceList.innerHTML = '';
    
    // 查找匹配的经历 (Search Experience)
    const matchedExp = portfolioData.experience.filter(e => e.tags.includes(skillName));
    
    // 查找匹配的项目 (Search Projects)
    const matchedProj = portfolioData.projects.filter(p => p.tags.includes(skillName));
    
    // 如果没有找到
    if (matchedExp.length === 0 && matchedProj.length === 0) {
        evidenceList.innerHTML = '<li>No specific evidence listed, but I possess this skill!</li>';
    } else {
        // 生成证据列表
        matchedExp.forEach(e => {
            evidenceList.innerHTML += `<li><strong>Experience:</strong> Used in ${e.company} to ${e.summary}</li>`;
        });
        matchedProj.forEach(p => {
            evidenceList.innerHTML += `<li><strong>Project:</strong> Used in ${p.title}</li>`;
        });
    }

    // 显示区域并添加动画效果
    skillNameSpan.innerText = skillName;
    displayArea.classList.remove('hidden');
    displayArea.scrollIntoView({ behavior: 'smooth' });
}
