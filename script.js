const SYSTEM_OPEN_DATE = new Date("2026-04-17T09:00:00");
const EVENTS = [
    { title: "ลงทะเบียน TCAS69 ผ่าน mytcas.com", date: "2025-10-28T08:30:00" },
    { title: "สมัครสอบ TGAT/TPAT2-5 (PBT/CBT)", date: "2025-10-30T08:30:00" },
    { title: "พิมพ์บัตรที่นั่งสอบ TGAT/TPAT2-5 (PBT/CBT)", date: "2025-11-29T08:30:00" },
    { title: "สอบ TGAT/TPAT3 (PBT/CBT)", date: "2025-12-13T08:30:00" },
    { title: "สอบ TPAT2/TPAT5 (PBT)", date: "2025-12-14T08:30:00" },
    { title: "สอบ TPAT4 ความถนัดทางสถาปัตยกรรมศาสตร์ (PBT)", date: "2025-12-15T08:30:00" },
    { title: "ประกาศผลสอบ TGAT/TPAT3 (CBT)", date: "2025-12-25T08:30:00" },
    { title: "ทบทวนผลสอบ TGAT/TPAT3 (CBT)", date: "2025-12-25T08:30:00" },
    { title: "ประกาศผล TGAT/TPAT2-5 (PBT)", date: "2026-01-13T08:30:00" },    
    { title: "ทบทวนผลสอบ TGAT/TPAT2-5 (PBT)", date: "2026-01-14T08:30:00" },    
    { title: "สมัครสอบ A-Level (PBT)", date: "2026-01-30T08:30:00" },
    { title: "พิมพ์บัตรที่นั่งสอบ A-Level (PBT)", date: "2026-02-28T08:30:00" },
    { title: "สอบ A-Level Bio/Phy/Thai/Soc", date: "2026-03-14T08:30:00" },
    { title: "สอบ A-Level Math1/Eng/Chem", date: "2026-03-15T08:30:00" },
    { title: "สอบ A-Level Math2/Sci/Fra/Deu/Jpn/Kor/Chn/Bal/Esp", date: "2026-03-16T08:30:00" },
    { title: "ประกาศเฉลย A-Level", date: "2026-03-26T08:30:00" },
    { title: "โต้แย้งเฉลย A-Level", date: "2026-03-27T08:30:00" },
    { title: "ประกาศผลสอบ A-Level", date: "2026-04-20T08:30:00" },
    { title: "ทบทวนผลสอบ A-Level", date: "2026-04-20T08:30:00" },
    { title: "รับสมัครรอบ 3 ผ่านระบบ mytcas.com", date: "2026-05-06T08:30:00" },
    { title: "ประกาศผลครั้งที่ 1 / ยืนยันสิทธิ์", date: "2026-05-20T08:30:00" },
    { title: "ประกาศผลครั้งที่ 2 / ยืนยันสิทธิ์อัตโนมัติ", date: "2026-05-26T08:30:00" },
    { title: "สละสิทธิ์ (เฉพาะผู้ที่ยืนยันสิทธิ์รอบ 3 Admission และไม่เคยสละสิทธิ์มาก่อนเท่านั้น)", date: "2026-05-27T08:30:00" }
];
const examData = {
    'TGAT1': { name: 'TGAT1 การสื่อสารภาษาอังกฤษ', obj: 1.6667, maxObj: 60, subj: 0, maxSubj: 0 },
    'TGAT2': { name: 'TGAT2 การคิดอย่างมีเหตุผล', obj: 1.25, maxObj: 80, subj: 0, maxSubj: 0 },
    'TGAT3': { name: 'TGAT3 สมรรถนะการทำงาน', obj: 1.6667, maxObj: 60, subj: 0, maxSubj: 0 },
    'TPAT21': { name: 'TPAT21 ทัศนศิลป์', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'TPAT22': { name: 'TPAT22 ดนตรี', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'TPAT23': { name: 'TPAT23 นาฏศิลป์', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },    
    'TPAT3': { name: 'TPAT3 ความถนัดด้านวิทยาศาสตร์ เทคโนโลยี และวิศวกรรมศาสตร์', obj: 1, maxObj: 64, subj: 2.25, maxSubj: 16 },
    'TPAT4': { name: 'TPAT4 ความถนัดทางสถาปัตยกรรมศาสตร์', obj: 3, maxObj: 25, subj: 5, maxSubj: 5 },
    'TPAT5': { name: 'TPAT5 ความถนัดครุศาสตร์-ศึกษาศาสตร์', obj: 1, maxObj: 100, subj: 0, maxSubj: 0 },
    'Math1': { name: 'A-Level คณิตศาสตร์ประยุกต์ 1', obj: 3, maxObj: 25, subj: 5, maxSubj: 5 },
    'Math2': { name: 'A-Level คณิตศาสตร์ประยุกต์ 2', obj: 3, maxObj: 25, subj: 5, maxSubj: 5 },
    'Sci': { name: 'A-Level วิทยาศาสตร์ประยุกต์', obj: 3.2, maxObj: 26, subj: 4.2, maxSubj: 4 },
    'Phy':   { name: 'A-Level ฟิสิกส์', obj: 3, maxObj: 25, subj: 5, maxSubj: 5 },
    'Chem': { name: 'A-Level เคมี', obj: 2.5, maxObj: 30, subj: 5, maxSubj: 5 },
    'Bio': { name: 'A-Level ชีววิทยา', obj: 2.4, maxObj: 35, subj: 3.2, maxSubj: 5 },
    'Soc': { name: 'A-Level สังคมศึกษา', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Thai': { name: 'A-Level ภาษาไทย', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Eng': { name: 'A-Level ภาษาอังกฤษ', obj: 1.25, maxObj: 80, subj: 0, maxSubj: 0 },
    'Fra': { name: 'A-Level ภาษาฝรั่งเศส', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Deu': { name: 'A-Level ภาษาเยอรมัน', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Jpn': { name: 'A-Level ภาษาญี่ปุ่น', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Kor': { name: 'A-Level ภาษาเกาหลี', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Chn': { name: 'A-Level ภาษาจีน', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Bal': { name: 'A-Level ภาษาบาลี', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
    'Esp': { name: 'A-Level ภาษาสเปน', obj: 2, maxObj: 50, subj: 0, maxSubj: 0 },
};

window.onload = function() {
    switchMenu('home');
    initCountdown();
    renderEventList();

    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit' };
    const dateEl = document.getElementById('open-date-text');
    if(dateEl) dateEl.innerText = SYSTEM_OPEN_DATE.toLocaleDateString('th-TH', options);
}

function switchMenu(menuName) {
    document.getElementById('menu-home').style.display = 'none';
    document.getElementById('menu-calc').style.display = 'none';
    document.getElementById('menu-plan').style.display = 'none';

    document.getElementById('btn-menu-home').classList.remove('active-menu');
    document.getElementById('btn-menu-calc').classList.remove('active-menu');
    document.getElementById('btn-menu-plan').classList.remove('active-menu');

    document.getElementById(`menu-${menuName}`).style.display = 'block';
    document.getElementById(`btn-menu-${menuName}`).classList.add('active-menu');

    if (menuName === 'calc') {
        checkSystemTime();
    }
}

function checkSystemTime() {
    const now = new Date();
    const content = document.getElementById('calc-content');
    const alertMsg = document.getElementById('system-closed-msg');

    if (now < SYSTEM_OPEN_DATE) {
        if(content) content.style.display = 'none';
        if(alertMsg) alertMsg.style.display = 'block';
    } else {
        if(content) content.style.display = 'block';
        if(alertMsg) alertMsg.style.display = 'none';
    }
}

let countdownInterval;

function initCountdown() {
    const banner = document.getElementById('countdown-banner');
    const titleEl = document.getElementById('event-title');
    const dateDisplayEl = document.getElementById('event-date-display');
    const now = new Date();

    const nextEvent = EVENTS.find(evt => new Date(evt.date) > now);

    if (!nextEvent) {
        if(banner) banner.style.display = 'none';
        return;
    }

    if(banner) banner.style.display = 'block';
    if(titleEl) titleEl.innerText = nextEvent.title;
    
    const eventDate = new Date(nextEvent.date);
    if(dateDisplayEl) {
        dateDisplayEl.innerText = `กำหนดการ: ${eventDate.toLocaleDateString('th-TH', { 
            day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute:'2-digit' 
        })}`;
    }

    updateTimer(nextEvent.date);
    
    if(countdownInterval) clearInterval(countdownInterval);
    
    countdownInterval = setInterval(() => {
        const keepGoing = updateTimer(nextEvent.date);
        if (!keepGoing) {
            clearInterval(countdownInterval);
            initCountdown();
            renderEventList();
        }
    }, 1000);
}

function updateTimer(targetDateString) {
    const target = new Date(targetDateString).getTime();
    const now = new Date().getTime();
    const diff = target - now;

    if (diff <= 0) return false;

    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((diff % (1000 * 60)) / 1000);

    const dEl = document.getElementById('days');
    if(dEl) {
        dEl.innerText = String(d).padStart(2, '0');
        document.getElementById('hours').innerText = String(h).padStart(2, '0');
        document.getElementById('minutes').innerText = String(m).padStart(2, '0');
        document.getElementById('seconds').innerText = String(s).padStart(2, '0');
    }
    
    return true;
}

function renderEventList() {
    const container = document.getElementById('event-list-container');
    if (!container) return;

    container.innerHTML = '';
    const now = new Date();

    EVENTS.forEach(evt => {
        const eventDate = new Date(evt.date);
        const isPast = now > eventDate;
        
        let timeText = "";
        let statusClass = "";

        if (isPast) {
            timeText = "ผ่านไปแล้ว";
            statusClass = "status-past";
        } else {
            const diff = eventDate - now;
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            timeText = days === 0 ? "วันนี้!" : `อีก ${days} วัน`;
            statusClass = "status-future";
        }

        const dateOptions = { 
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        };
        const dateString = eventDate.toLocaleDateString('th-TH', dateOptions);

        const card = document.createElement('div');
        card.className = `event-card ${isPast ? 'card-past' : ''}`;
        
        card.innerHTML = `
            <div class="event-info">
                <div class="event-title">${evt.title}</div>
                <div class="event-date">
                    ${dateString}
                </div>
            </div>
            <div class="event-status ${statusClass}">
                ${timeText}
            </div>
        `;
        container.appendChild(card);
    });
}

let userRawScores = {};

document.querySelectorAll('.subject-list input[type="checkbox"]').forEach(chk => {
    chk.addEventListener('change', function() {
        const input = this.parentElement.nextElementSibling;
        if(input) {
            input.disabled = !this.checked;
            if (!this.checked) input.value = '';
        }
    });
});

function goToStep2() {
    userRawScores = {};
    const weightBox = document.getElementById('weight-inputs');
    weightBox.innerHTML = '';
    let hasSelect = false;

    const checks = document.querySelectorAll('.subject-list input[type="checkbox"]');
    for (let chk of checks) {
        if (chk.checked) {
            const scoreInput = chk.parentElement.nextElementSibling;
            if (scoreInput.value === '') {
                alert(`กรุณากรอกคะแนนวิชา ${chk.value} ให้ครบ`);
                return;
            }
            userRawScores[chk.value] = parseFloat(scoreInput.value);
            hasSelect = true;

            weightBox.innerHTML += `
                <div class="subject-item">
                    <span>น้ำหนัก ${chk.value} (%):</span>
                    <input type="number" class="w-input" data-sub="${chk.value}">
                </div>
            `;
        }
    }

    if (!hasSelect) {
        alert("เลือกวิชาอย่างน้อย 1 วิชา");
        return;
    }

    document.getElementById('step1').classList.add('disabled-step');
    document.getElementById('step2').classList.remove('disabled-step');
}

function backToStep1() {
    document.getElementById('step1').classList.remove('disabled-step');
    document.getElementById('step2').classList.add('disabled-step');
}

function calculateAdmissionTotal() {
    let total = 0;
    let totalWeight = 0;
    const wInputs = document.querySelectorAll('.w-input');

    wInputs.forEach(inp => {
        const w = parseFloat(inp.value) || 0;
        const sub = inp.getAttribute('data-sub');
        total += (userRawScores[sub] * w) / 100;
        totalWeight += w;
    });

    const display = document.getElementById('final-admission-score');
    display.innerText = total.toFixed(4);
    
    if (totalWeight > 100) alert("⚠️ น้ำหนักรวมเกิน 100%");
}
function calculatePlan() {
    const subKey = document.getElementById('plan-subject').value;
    const target = parseFloat(document.getElementById('target-score').value);
    const resultDiv = document.getElementById('plan-result');
    
    resultDiv.style.display = 'block';
    
    if (!target && target !== 0 || target < 0 || target > 100) {
        resultDiv.innerHTML = "❌ กรอกคะแนนให้ถูกต้อง";
        return;
    }

    const data = examData[subKey];
    let html = `<strong>วิชา ${data.name} (เป้า ${target} คะแนน):</strong><ul>`;
    let found = false;

    let labelSubj = "อัตนัย";
    let labelObj = "ปรนัย";

    if (subKey === 'TPAT3') {
        labelSubj = "พาร์ทความคิดและความสนใจ";
        labelObj = "พาร์ทการทดสอบความถนัด";
    } else if (subKey === 'TPAT4') {
        labelSubj = "พาร์ทมิติสัมพันธ์";
        labelObj = "พาร์ทความรู้ทั่วไป";
    }

    for (let s = 0; s <= data.maxSubj; s++) {
        let scoreS = s * data.subj; 
        let needed = target - scoreS; 

        if (needed >= -0.1) {
            let o = needed / data.obj; 
            let roundedO = Math.round(o);
            
            if (Math.abs(roundedO - o) < 0.1) {
                if (roundedO <= data.maxObj && roundedO >= 0) {
                    let textDisplay = "";
                    if (data.maxSubj === 0) {
                        textDisplay = `${labelObj} <b>${roundedO}</b> ข้อ`;
                    } else {
                        textDisplay = `${labelSubj} <b>${s}</b> ข้อ + ${labelObj} <b>${roundedO}</b> ข้อ`;
                    }
                    html += `<li>✅ ${textDisplay}</li>`;
                    found = true;
                }
            }
        }
    }

    html += "</ul>";
    
    if (!found) html = `⚠️ คะแนน ${target} เป็นไปไม่ได้สำหรับวิชานี้`;
    
    resultDiv.innerHTML = html;
}
document.addEventListener('contextmenu', e => e.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123 || (e.ctrlKey && e.shiftKey && e.keyCode == 73) || (e.ctrlKey && e.keyCode == 85)) return false;
}

function nukeContent() {
    if(document.body.getAttribute('data-nuked') === 'true') return;
    document.body.innerHTML = `
        <div style="display:flex;justify-content:center;align-items:center;height:100vh;background:#000;color:red;font-family:sans-serif;text-align:center;">
            <div>
                <h1 style="font-size:5rem;">🚫 ACCESS DENIED</h1>
                <p style="font-size:1.5rem;color:white;">ระบบตรวจพบการพยายามเข้าถึง Source Code</p>
                <p style="font-size:1rem;color:gray;">IP ของคุณถูกบันทึกแล้ว</p>
            </div>
        </div>
    `;
    document.body.setAttribute('data-nuked', 'true');
}

window.onresize = function() {
    if ((window.outerWidth - window.innerWidth) > 200 || (window.outerHeight - window.innerHeight) > 200) {
        nukeContent();
    }
};

setInterval(function() {
    const startTime = performance.now();
    debugger;
    const endTime = performance.now();

    if (endTime - startTime > 100) {
        nukeContent();
    }
}, 500);
var element = new Image();
Object.defineProperty(element, 'id', {
  get: function() {
    nukeContent();
  }
});
console.log(element);