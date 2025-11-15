// ui elements 
const defaultSnippets = [
  // alert
{ 
  className: "alerts",
  html: `
<div class="alert">
  <strong>⚡ Alert!</strong>
  <span>This is a sleek, professional alert with subtle animation.</span>
  <button>&times;</button>
</div>
  `,
  css: `
.alert {
  position: relative;
  padding: 1rem 1.5rem;
  border-left: 5px solid #3b82f6;
  border-radius: 8px;
  background: #f0f9ff;
  color: #1e293b;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 6px 15px rgba(0,0,0,0.1);
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
  animation: fadeSlide 0.5s ease-out;
  max-width: 320px;
}

.alert strong {
  font-size: 1.1rem;
}

.alert span {
  font-size: 0.95rem;
  line-height: 1.4;
}

.alert button {
  position: absolute;
  top: 8px;
  right: 8px;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #334155;
  transition: transform 0.2s, color 0.2s;
}

.alert button:hover {
  transform: rotate(90deg);
  color: #3b82f6;
}

@keyframes fadeSlide {
  0% { opacity: 0; transform: translateY(-10px); }
  100% { opacity: 1; transform: translateY(0); }
}
  `
},
//button
{ className: "buttons",
  html: `
  <button class="neon-btn">Click Me</button>`,
  css: `.neon-btn {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #3b82f6;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 40px #9333ea;
  transition: all 0.3s ease;
}

.neon-btn:hover {
  background: #9333ea;
  box-shadow: 0 0 20px #3b82f6, 0 0 40px #9333ea, 0 0 60px #f472b6;
  transform: scale(1.05);
}
`
},

//cards
{ className: "cards",
  html: `
  <div class="glass-card">
    <h2>Glass Card</h2>
    <p>Minimal and frosted glass effect.</p>
  </div>
  `,
  css: `
  .glass-card {
    padding: 20px 28px;
    border-radius: 16px;
    backdrop-filter: blur(12px);
    background: rgba(255,255,255,0.1);
    color: #f0f9ff;
    box-shadow: 0 8px 25px rgba(0,0,0,0.2);
    font-family: 'Segoe UI', sans-serif;
    text-align: center;
  }
  .glass-card h2 { margin: 0 0 10px; }
  .glass-card p { margin: 0; font-size: 0.95rem; }
`},

//checkboxes
{ className: "checkboxes",
  html: `
  <label class="glass-checkbox">
    <input type="checkbox">
    <span>Glass Checkbox</span>
  </label>
  `,
  css: `
  .glass-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #f0f9ff;
  }
  .glass-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(8px);
    background: rgba(255,255,255,0.1);
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .glass-checkbox input[type="checkbox"]:checked {
    background: linear-gradient(135deg, #3b82f6, #9333ea);
    border-color: #3b82f6;
  }
`},

//dropdowns
{ className: "dropdowns",
  html: `
  <div class="pulse-neon-dropdown">
    <select>
      <option>Pulse Neon 1</option>
      <option>Pulse Neon 2</option>
      <option>Pulse Neon 3</option>
    </select>
  </div>
  `,
  css: `
  .pulse-neon-dropdown select {
    padding: 10px 16px;
    border-radius: 12px;
    border: 2px solid #9333ea;
    background: transparent;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    animation: neonPulse 2s infinite alternate;
  }
  .pulse-neon-dropdown select:hover {
    background: #9333ea;
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
  }
  @keyframes neonPulse {
    0% { box-shadow: 0 0 5px #9333ea; }
    100% { box-shadow: 0 0 20px #3b82f6; }
  }
`},
//icons
{ className: "icons",
  html: `
  <div class="holo-icon">&#9733;</div>
  `,
  css: `
  .holo-icon {
    font-size: 50px;
    color: #3b82f6;
    background: conic-gradient(#3b82f6, #9333ea, #f472b6);
    -webkit-background-clip: text;
    color: transparent;
    animation: rotateGradient 3s linear infinite;
    display: inline-block;
  }
  @keyframes rotateGradient {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`},
//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="glass-input" placeholder="Glass Input">
  `,
  css: `
  .glass-input {
    padding: 12px 16px;
    border-radius: 12px;
    border: none;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    color: #f0f9ff;
    font-family: 'Segoe UI', sans-serif;
    transition: all 0.3s ease;
  }
  .glass-input:focus {
    outline: none;
    background: rgba(255,255,255,0.2);
    box-shadow: 0 0 10px #3b82f6;
  }
`},
//loaders
{ className: "loaders",
  html: `
  <div class="spinner"></div>
  `,
  css: `
  .spinner {
    width: 50px;
    height: 50px;
    border: 6px solid rgba(255,255,255,0.2);
    border-top: 6px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`},
//radio buttons
{ className: "radioButtons",
  html: `
  <label class="neon-radio">
    <input type="radio" name="group1">
    <span>Option 1</span>
  </label>
  <label class="neon-radio">
    <input type="radio" name="group1">
    <span>Option 2</span>
  </label>
  `,
  css: `
  .neon-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .neon-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border: 2px solid #3b82f6;
    border-radius: 50%;
    background: transparent;
    appearance: none;
    cursor: pointer;
    transition: all 0.3s;
    position: relative;
  }
  .neon-radio input[type="radio"]:checked::after {
    content: '';
    position: absolute;
    top: 4px; left: 4px;
    width: 8px; height: 8px;
    background: #3b82f6;
    border-radius: 50%;
  }
`},
//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="holo-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .holo-toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }
  .holo-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .holo-toggle span {
    position: absolute;
    cursor: pointer;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: linear-gradient(135deg, #3b82f6, #9333ea);
    border-radius: 34px;
    transition: 0.4s;
  }
  .holo-toggle span::before {
    content: "";
    position: absolute;
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: 0.4s;
  }
  .holo-toggle input:checked + span::before {
    transform: translateX(26px);
    background: #f472b6;
  }
`},

//alert
{ className: "alerts",
  html: `
<div class="glass-alert">
  <div class="icon">⚠️</div>
  <div class="content">
    <strong>Heads Up!</strong>
    <p>This is a stylish glassmorphic alert with smooth animation.</p>
  </div>
  <button>&times;</button>
</div>
  `,
  css: `
.glass-alert {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 24px;
  border-radius: 16px;
  backdrop-filter: blur(12px);
  background: rgba(255, 255, 255, 0.15);
  color: #f1f5f9;
  font-family: 'Segoe UI', sans-serif;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  animation: floatIn 0.5s ease-out;
  max-width: 360px;
}

.glass-alert .icon {
  font-size: 28px;
  animation: pulse 1s infinite alternate;
}

.glass-alert .content strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.glass-alert .content p {
  margin: 0;
  font-size: 0.95rem;
  line-height: 1.4;
}

.glass-alert button {
  position: absolute;
  top: 12px;
  right: 12px;
  background: transparent;
  border: none;
  color: #f1f5f9;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.glass-alert button:hover {
  transform: rotate(90deg) scale(1.1);
}

@keyframes pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.2); }
}

@keyframes floatIn {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
  `
},

//button
{ className: "buttons",
  html: `
  <button class="glass-btn">Submit</button>
  `,
  css: `
  .glass-btn {
  padding: 12px 28px;
  font-size: 1rem;
  color: #f0f9ff;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
}

.glass-btn:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: scale(1.05);
  border-color: rgba(255,255,255,0.4);
}
`},
//cards
{ className: "cards",
  html: `
  <div class="neon-card">
    <h2>Neon Card</h2>
    <p>Glowing border with vibrant hover.</p>
  </div>
  `,
  css: `
  .neon-card {
    padding: 20px 28px;
    border: 2px solid;
    border-image: linear-gradient(45deg, #3b82f6, #9333ea, #f472b6) 1;
    border-radius: 16px;
    color: #fff;
    text-align: center;
    transition: transform 0.3s ease;
    font-family: 'Segoe UI', sans-serif;
  }
  .neon-card:hover { transform: scale(1.05); }
`},

//checkboxes
{ className: "checkboxes",
  html: `
  <label class="neon-checkbox">
    <input type="checkbox">
    <span>Neon Checkbox</span>
  </label>
  `,
  css: `
  .neon-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
  }
  .neon-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 2px solid #3b82f6;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 0 5px #3b82f6;
  }
  .neon-checkbox input[type="checkbox"]:checked {
    background: #9333ea;
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
  }
`},

//icons
{ className: "icons",
  html: `
  <div class="liquid-icon">&#9889;</div>
  `,
  css: `
  .liquid-icon {
    font-size: 60px;
    color: #3b82f6;
    position: relative;
    display: inline-block;
    filter: drop-shadow(0 0 15px #9333ea);
    animation: neonPulse 2s infinite alternate;
  }
  @keyframes neonPulse {
    0% { transform: scale(1) rotate(0deg); text-shadow: 0 0 10px #3b82f6; }
    50% { transform: scale(1.1) rotate(10deg); text-shadow: 0 0 20px #9333ea; }
    100% { transform: scale(1) rotate(-10deg); text-shadow: 0 0 10px #f472b6; }
  }
`},
//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="gradient-input" placeholder="Gradient Outline">
  `,
  css: `
  .gradient-input {
    padding: 12px 18px;
    border-radius: 10px;
    border: 2px solid transparent;
    background: #111827;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    background-clip: padding-box;
    position: relative;
    z-index: 0;
    transition: all 0.3s ease;
  }
  .gradient-input:focus {
    outline: none;
    border-image: linear-gradient(135deg,#3b82f6,#9333ea,#f472b6) 1;
  }
`},
//loaders
{ className: "loaders",
  html: `
  <div class="orbit-loader"></div>
  `,
  css: `
  .orbit-loader {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(#3b82f6 25%, transparent 0);
    animation: orbit 1s linear infinite;
  }
  @keyframes orbit {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="glass-radio">
    <input type="radio" name="group2">
    <span>Option A</span>
  </label>
  <label class="glass-radio">
    <input type="radio" name="group2">
    <span>Option B</span>
  </label>
  `,
  css: `
  .glass-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #f0f9ff;
    cursor: pointer;
    margin-bottom: 8px;
  }
  .glass-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.3);
    backdrop-filter: blur(6px);
    background: rgba(255,255,255,0.05);
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  .glass-radio input[type="radio"]:checked {
    background: linear-gradient(135deg,#3b82f6,#9333ea);
    box-shadow: 0 0 10px #3b82f6, 0 0 20px #9333ea;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="futuristic-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .futuristic-toggle {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 38px;
  }
  .futuristic-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .futuristic-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    border-radius: 38px;
    background: linear-gradient(135deg,#3b82f6,#9333ea);
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
    transition: 0.4s;
  }
  .futuristic-toggle span::before {
    content: "";
    position: absolute;
    height: 30px;
    width: 30px;
    left: 4px;
    bottom: 4px;
    background: #fff;
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  }
  .futuristic-toggle input:checked + span::before {
    transform: translateX(32px) rotate(20deg);
    background: #f472b6;
  }
  .futuristic-toggle input:checked + span {
    box-shadow: 0 0 20px #3b82f6, 0 0 25px #9333ea;
  }
`},

//alert
{
  className: "alerts",
  html: `
<div class="corner-alert">
  <span class="message">🚀 Success! Your action was completed.</span>
  <button>&times;</button>
</div>
  `,
  css: `
.corner-alert {
  position: fixed;
  top: 24px;
  right: 24px;
  background: linear-gradient(135deg, #22c55e, #16a34a);
  color: white;
  padding: 14px 20px;
  border-radius: 12px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.2);
  animation: slideIn 0.5s ease-out;
  max-width: 280px;
}

.corner-alert button {
  background: transparent;
  border: none;
  color: white;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.corner-alert button:hover {
  transform: rotate(90deg) scale(1.1);
}

@keyframes slideIn {
  0% { transform: translateX(50px); opacity: 0; }
  100% { transform: translateX(0); opacity: 1; }
}
  `
},
//button
{ className: "buttons",
  html: `
  <button class="gradient-btn">Explore</button>
  `,
  css: `
  .gradient-btn {
  padding: 12px 28px;
  font-size: 1rem;
  color: #111827;
  background: transparent;
  border: 3px solid;
  border-image: linear-gradient(45deg, #3b82f6, #9333ea, #f472b6) 1;
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.gradient-btn::after {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(45deg, #3b82f6, #9333ea, #f472b6);
  transition: all 0.3s ease;
  z-index: 0;
}

.gradient-btn:hover::after {
  left: 0;
}

.gradient-btn span {
  position: relative;
  z-index: 1;
}
`},
//cards
{ className: "cards",
  html: `
  <div class="float-card">
    <h2>Float Card</h2>
    <p>Light shadow and lift effect.</p>
  </div>
  `,
  css: `
  .float-card {
    padding: 20px 28px;
    background: #10b981;
    color: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 20px rgba(0,0,0,0.25);
    transition: transform 0.3s ease;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .float-card:hover { transform: translateY(-6px); }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="pulse-checkbox">
    <input type="checkbox">
    <span>Pulse Checkbox</span>
  </label>
  `,
  css: `
  .pulse-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
  }
  .pulse-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 2px solid #10b981;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    animation: pulseBorder 2s infinite alternate;
    transition: all 0.2s;
  }
  .pulse-checkbox input[type="checkbox"]:checked {
    background: #10b981;
  }
  @keyframes pulseBorder {
    0% { box-shadow: 0 0 5px #10b981; }
    100% { box-shadow: 0 0 15px #10b981; }
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="grid-dropdown">
    <select>
      <option>Grid Option 1</option>
      <option>Grid Option 2</option>
      <option>Grid Option 3</option>
    </select>
  </div>
  `,
  css: `
  .grid-dropdown select {
    padding: 10px 16px;
    border-radius: 8px;
    border: 2px solid #111827;
    background: linear-gradient(45deg, #3b82f6, #9333ea);
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
  }
  .grid-dropdown select:hover {
    border-color: #f43f5e;
    background: linear-gradient(45deg, #9333ea, #f472b6);
  }
`},
//icons
{ className: "icons",
  html: `
  <div class="floating-icon">&#9881;</div>
  `,
  css: `
  .floating-icon {
    font-size: 60px;
    background: linear-gradient(135deg,#f43f5e,#3b82f6);
    -webkit-background-clip: text;
    color: transparent;
    display: inline-block;
    animation: float 3s ease-in-out infinite;
  }
  @keyframes float {
    0%,100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-15px) rotate(10deg); }
  }
`},
{ className: "icons",
  html: `
  <div class="particle-icon">&#9881;</div>
  `,
  css: `
  .particle-icon {
    font-size: 60px;
    color: #f472b6;
    position: relative;
    display: inline-block;
    animation: burst 1.5s infinite alternate;
  }
  @keyframes burst {
    0% { text-shadow: 0 0 2px #f472b6; transform: scale(1); }
    50% { text-shadow: 0 0 15px #f472b6, 0 0 30px #3b82f6; transform: scale(1.2) rotate(10deg);}
    100% { text-shadow: 0 0 2px #9333ea; transform: scale(1); }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="slide-input" placeholder="Sliding Highlight">
  `,
  css: `
  .slide-input {
    padding: 12px 16px;
    border: 2px solid #3b82f6;
    border-radius: 8px;
    font-family: 'Segoe UI', sans-serif;
    background: #111827;
    color: #fff;
    position: relative;
    transition: all 0.3s ease;
  }
  .slide-input:focus {
    outline: none;
    border-color: #9333ea;
    background: linear-gradient(135deg,#3b82f6,#9333ea) padding-box;
    color: #fff;
  }
`},
//loaders
{ className: "loaders",
  html: `
  <div class="dots-loader">
    <span></span><span></span><span></span>
  </div>
  `,
  css: `
  .dots-loader {
    display: flex;
    gap: 8px;
  }
  .dots-loader span {
    width: 12px;
    height: 12px;
    background: linear-gradient(135deg,#3b82f6,#9333ea);
    border-radius: 50%;
    animation: expand 0.6s infinite alternate;
  }
  .dots-loader span:nth-child(2) { animation-delay: 0.2s; }
  .dots-loader span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes expand {
    0% { transform: scale(1); opacity: 0.5; }
    100% { transform: scale(1.5); opacity: 1; }
  }
`},
//radio buttons
{ className: "radioButtons",
  html: `
  <label class="hollow-radio">
    <input type="radio" name="group3">
    <span>Alpha</span>
  </label>
  <label class="hollow-radio">
    <input type="radio" name="group3">
    <span>Beta</span>
  </label>
  `,
  css: `
  .hollow-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    color: #fff;
    margin-bottom: 6px;
  }
  .hollow-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border: 2px solid #9333ea;
    border-radius: 50%;
    background: transparent;
    appearance: none;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .hollow-radio input[type="radio"]:checked {
    background: none;
    box-shadow: inset 0 0 0 6px #3b82f6;
  }
`},
//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="liquid-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .liquid-toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 30px;
  }
  .liquid-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .liquid-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #3b82f6;
    border-radius: 30px;
    transition: 0.4s;
    box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  }
  .liquid-toggle span::before {
    content: "";
    position: absolute;
    width: 26px;
    height: 26px;
    left: 2px;
    top: 2px;
    background: linear-gradient(135deg,#f472b6,#9333ea);
    border-radius: 50%;
    transition: 0.4s;
    box-shadow: 0 2px 6px rgba(0,0,0,0.3);
  }
  .liquid-toggle input:checked + span::before {
    transform: translateX(30px) rotate(-15deg);
  }
  .liquid-toggle input:checked + span {
    background: #111827;
    box-shadow: inset 0 0 10px #3b82f6;
  }
`},

//alert
{ 
  className: "alerts",
  html: `
<div class="bubble-alert">
  <div class="icon">💬</div>
  <p>New message received!</p>
</div>
  `,
  css: `
.bubble-alert {
  position: fixed;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  background: #facc15;
  color: #1f2937;
  padding: 16px 24px;
  border-radius: 50px;
  display: flex;
  align-items: center;
  gap: 12px;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(0,0,0,0.2);
  animation: bounceIn 0.6s ease-out;
  cursor: pointer;
  max-width: 320px;
}

.bubble-alert .icon {
  font-size: 24px;
  animation: pulse 1s infinite alternate;
}

.bubble-alert p {
  margin: 0;
  font-size: 0.95rem;
}

@keyframes bounceIn {
  0% { transform: translate(-50%, 100px); opacity: 0; }
  60% { transform: translate(-50%, -10px); opacity: 1; }
  100% { transform: translate(-50%, 0); }
}

@keyframes pulse {
  0% { transform: scale(1); }
  100% { transform: scale(1.2); }
}
  `
},
//button
{ className: "buttons",
  html: `
  <button class="bounce-btn">Press</button>
  `,
  css: `.bounce-btn {
  padding: 12px 28px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #10b981;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px 0 #059669;
  transition: all 0.2s ease;
}

.bounce-btn:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}
`},
//cards
{ className: "cards",
  html: `
  <div class="gradient-card">
    <h2>Gradient Card</h2>
    <p>Vibrant gradient with soft blur.</p>
  </div>
  `,
  css: `
  .gradient-card {
    padding: 20px 28px;
    background: linear-gradient(135deg, #f43f5e, #3b82f6);
    color: #fff;
    border-radius: 16px;
    filter: blur(0.5px);
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .gradient-card h2 { margin: 0 0 8px; }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="pulse-checkbox">
    <input type="checkbox">
    <span>Pulse Checkbox</span>
  </label>
  `,
  css: `
  .pulse-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
  }
  .pulse-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 2px solid #10b981;
    border-radius: 50%;
    background: transparent;
    cursor: pointer;
    animation: pulseBorder 2s infinite alternate;
    transition: all 0.2s;
  }
  .pulse-checkbox input[type="checkbox"]:checked {
    background: #10b981;
  }
  @keyframes pulseBorder {
    0% { box-shadow: 0 0 5px #10b981; }
    100% { box-shadow: 0 0 15px #10b981; }
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="orb-dropdown">
    <select>
      <option>Orb Option 1</option>
      <option>Orb Option 2</option>
      <option>Orb Option 3</option>
    </select>
  </div>
  `,
  css: `
  .orb-dropdown select {
    padding: 10px 16px;
    border-radius: 50%;
    border: 2px solid #3b82f6;
    background: radial-gradient(circle, #3b82f6, #9333ea);
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    transition: transform 0.3s ease;
  }
  .orb-dropdown select:hover {
    transform: scale(1.1);
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
  }
`},

//icons
{ className: "icons",
  html: `
  <div class="spark-icon">&#10084;</div>
  `,
  css: `
  .spark-icon {
    font-size: 60px;
    color: #ff49db;
    position: relative;
    display: inline-block;
    animation: spark 1.5s infinite alternate;
  }
  @keyframes spark {
    0% { text-shadow: 0 0 2px #ff49db; transform: scale(1); }
    50% { text-shadow: 0 0 20px #ff49db, 0 0 40px #10b981; transform: scale(1.3) rotate(-15deg); }
    100% { text-shadow: 0 0 5px #9333ea; transform: scale(1); }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="neon-input" placeholder="Neon Glow Input">
  `,
  css: `
  .neon-input {
    padding: 12px 16px;
    border-radius: 12px;
    border: 2px solid #9333ea;
    font-family: 'Segoe UI', sans-serif;
    background: #111827;
    color: #fff;
    transition: all 0.3s ease;
    box-shadow: 0 0 0 transparent;
  }
  .neon-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 10px #3b82f6, 0 0 20px #9333ea;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="ring-loader"></div>
  `,
  css: `
  .ring-loader {
    width: 50px;
    height: 50px;
    border: 6px solid rgba(59,130,246,0.2);
    border-top: 6px solid #3b82f6;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="slide-radio">
    <input type="radio" name="group4">
    <span>One</span>
  </label>
  <label class="slide-radio">
    <input type="radio" name="group4">
    <span>Two</span>
  </label>
  `,
  css: `
  .slide-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .slide-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #10b981;
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  .slide-radio input[type="radio"]:checked::before {
    content: "";
    position: absolute;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #10b981;
    top: 4px;
    left: 4px;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="flip-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .flip-toggle {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 32px;
  }
  .flip-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .flip-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #9333ea;
    border-radius: 32px;
    transition: 0.4s;
  }
  .flip-toggle span::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    left: 2px;
    top: 2px;
    background: #fff;
    border-radius: 50%;
    transition: 0.4s;
  }
  .flip-toggle input:checked + span::before {
    transform: rotateY(180deg) translateX(28px);
    background: #f472b6;
  }
  .flip-toggle input:checked + span {
    background: #111827;
    box-shadow: inset 0 0 8px #9333ea;
  }
`},
//alert
{
  className: "alerts",
  html: `
<div class="top-banner-alert">
  <span>🔥 Important Update: Your profile has been updated successfully!</span>
  <button>&times;</button>
</div>
  `,
  css: `
.top-banner-alert {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 16px 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #1e40af;
  color: #f0f9ff;
  font-family: 'Segoe UI', sans-serif;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  border-bottom: 4px solid transparent;
  animation: slideDown 0.5s ease-out forwards, gradientBorder 3s linear infinite;
  overflow: hidden;
}

.top-banner-alert button {
  background: transparent;
  border: none;
  color: #f0f9ff;
  font-size: 1.2rem;
  cursor: pointer;
  transition: transform 0.2s;
}

.top-banner-alert button:hover {
  transform: scale(1.2);
}

@keyframes slideDown {
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
}

@keyframes gradientBorder {
  0% { border-color: #facc15; }
  25% { border-color: #22c55e; }
  50% { border-color: #3b82f6; }
  75% { border-color: #f472b6; }
  100% { border-color: #facc15; }
}
  `
},
//cards
{ className: "cards",
  html: `
  <div class="pulse-card">
    <h2>Pulse Card</h2>
    <p>Subtle scale pulse animation.</p>
  </div>
  `,
  css: `
  .pulse-card {
    padding: 20px 28px;
    background: #9333ea;
    color: #fff;
    border-radius: 16px;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    animation: pulse 2s infinite alternate;
  }
  @keyframes pulse {
    0% { transform: scale(1); }
    100% { transform: scale(1.05); }
  }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="holo-checkbox">
    <input type="checkbox">
    <span>Holographic Checkbox</span>
  </label>
  `,
  css: `
  .holo-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #f0f9ff;
  }
  .holo-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: none;
    background: conic-gradient(#3b82f6, #9333ea, #f472b6);
    cursor: pointer;
    transition: all 0.3s;
    filter: blur(1px);
  }
  .holo-checkbox input[type="checkbox"]:checked {
    box-shadow: 0 0 10px #3b82f6, 0 0 20px #9333ea;
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="ribbon-dropdown">
    <select>
      <option>Ribbon Option 1</option>
      <option>Ribbon Option 2</option>
      <option>Ribbon Option 3</option>
    </select>
  </div>
  `,
  css: `
  .ribbon-dropdown select {
    padding: 10px 16px;
    border-radius: 8px;
    border: 2px solid #f43f5e;
    background: #fbbf24;
    color: #111827;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ribbon-dropdown select:hover {
    transform: rotate(2deg);
    border-color: #9333ea;
  }
`},
//icons
{ className: "icons",
  html: `
  <div class="orbit-icon">&#9733;</div>
  `,
  css: `
  .orbit-icon {
    font-size: 60px;
    color: #3b82f6;
    display: inline-block;
    position: relative;
    animation: orbit 2s linear infinite;
  }
  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(0); }
    50% { transform: rotate(180deg) translateX(10px); }
    100% { transform: rotate(360deg) translateX(0); }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="shadow-input" placeholder="Shadow Glow Input">
  `,
  css: `
  .shadow-input {
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid transparent;
    background: #111827;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    box-shadow: 0 0 10px rgba(59,130,246,0.5);
    transition: all 0.3s ease;
  }
  .shadow-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="bar-loader">
    <span></span><span></span><span></span><span></span>
  </div>
  `,
  css: `
  .bar-loader {
    display: flex;
    gap: 6px;
    align-items: flex-end;
    height: 40px;
  }
  .bar-loader span {
    width: 8px;
    height: 10px;
    background: linear-gradient(135deg,#3b82f6,#9333ea);
    animation: rise 0.6s infinite alternate;
  }
  .bar-loader span:nth-child(2) { animation-delay: 0.1s; }
  .bar-loader span:nth-child(3) { animation-delay: 0.2s; }
  .bar-loader span:nth-child(4) { animation-delay: 0.3s; }
  @keyframes rise {
    0% { height: 10px; }
    100% { height: 40px; }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="pulse-radio">
    <input type="radio" name="group5">
    <span>Red</span>
  </label>
  <label class="pulse-radio">
    <input type="radio" name="group5">
    <span>Blue</span>
  </label>
  `,
  css: `
  .pulse-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .pulse-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #f43f5e;
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  .pulse-radio input[type="radio"]:checked {
    background: #f43f5e;
    box-shadow: 0 0 10px #f43f5e, 0 0 20px #9333ea;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="slide-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .slide-toggle {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
  }
  .slide-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slide-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #9333ea;
    border-radius: 36px;
    transition: 0.4s;
  }
  .slide-toggle span::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    left: 2px;
    top: 2px;
    background: #fff;
    border-radius: 50%;
    transition: 0.4s;
  }
  .slide-toggle input:checked + span::before {
    transform: translateX(34px);
    background: linear-gradient(135deg,#3b82f6,#f472b6);
  }
  .slide-toggle input:checked + span {
    background: #111827;
    box-shadow: inset 0 0 10px #9333ea;
  }
`},
//alert
{ className: "buttons",
  html: `
  <button class="liquid-btn">Hover Me</button>
  `,
  css: `.liquid-btn {
  position: relative;
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  border: none;
  border-radius: 50px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.4s ease;
}

.liquid-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: rgba(255,255,255,0.2);
  border-radius: 45%;
  transform: scale(0);
  transition: all 0.5s ease;
}

.liquid-btn:hover::before {
  transform: scale(1);
}

.liquid-btn:hover {
  transform: scale(1.05);
}
`},
//alerts
{
  className: "alerts",
  html: `
<div class="ribbon-alert">
  <span>⚡ New Feature Unlocked!</span>
</div>
  `,
  css: `
.ribbon-alert {
  position: fixed;
  top: 20px;
  right: -60px;
  background: #f43f5e;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  font-weight: bold;
  padding: 12px 60px;
  transform: rotate(45deg);
  box-shadow: 0 6px 20px rgba(0,0,0,0.3);
  animation: slideRibbon 0.6s ease-out forwards;
  z-index: 1000;
  cursor: pointer;
}

.ribbon-alert:hover {
  transform: rotate(45deg) scale(1.1);
  transition: transform 0.3s ease;
}

@keyframes slideRibbon {
  0% { right: -150px; opacity: 0; }
  100% { right: -60px; opacity: 1; }
}
  `
},

//button
{ className: "buttons",
  html: `<button class="tilt-btn">Click</button>
  `,
  css: `.tilt-btn {
  padding: 14px 32px;
  font-size: 1rem;
  color: #fff;
  background: #f43f5e;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 6px #be123c;
  transition: all 0.2s ease;
}

.tilt-btn:hover {
  transform: translateY(-4px) rotateX(5deg) rotateY(5deg);
  box-shadow: 0 12px #be123c;
}
`},
//cards
{ className: "cards",
  html: `
  <div class="holo-card">
    <h2>Holo Card</h2>
    <p>Holographic glow with blur backdrop.</p>
  </div>
  `,
  css: `
  .holo-card {
    padding: 20px 28px;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(10px);
    color: #f0f9ff;
    border-radius: 16px;
    text-align: center;
    box-shadow: 0 0 25px #3b82f6, 0 0 40px #9333ea;
    font-family: 'Segoe UI', sans-serif;
  }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="ribbon-checkbox">
    <input type="checkbox">
    <span>Ribbon Checkbox</span>
  </label>
  `,
  css: `
  .ribbon-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #111827;
  }
  .ribbon-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border: 2px solid #f43f5e;
    border-radius: 4px;
    background: #fbbf24;
    cursor: pointer;
    transition: all 0.3s;
  }
  .ribbon-checkbox input[type="checkbox"]:checked {
    transform: rotate(20deg);
    background: #f43f5e;
    border-color: #9333ea;
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="holo-dropdown">
    <select>
      <option>Holo Option 1</option>
      <option>Holo Option 2</option>
      <option>Holo Option 3</option>
    </select>
  </div>
  `,
  css: `
  .holo-dropdown select {
    padding: 10px 16px;
    border-radius: 12px;
    border: none;
    background: conic-gradient(#3b82f6, #9333ea, #f472b6);
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    filter: blur(1px);
    transition: all 0.3s ease;
  }
  .holo-dropdown select:hover {
    filter: blur(0);
    box-shadow: 0 0 10px #3b82f6, 0 0 20px #9333ea;
  }
`},
//icons
{ className: "icons",
  html: `
  <div class="wave-icon">&#9889;</div>
  `,
  css: `
  .wave-icon {
    font-size: 60px;
    color: #10b981;
    display: inline-block;
    animation: wave 1.2s ease-in-out infinite;
  }
  @keyframes wave {
    0%,100% { transform: translateY(0) rotate(0deg); text-shadow: 0 0 2px #10b981; }
    25% { transform: translateY(-10px) rotate(-10deg); text-shadow: 0 0 10px #3b82f6; }
    50% { transform: translateY(5px) rotate(10deg); text-shadow: 0 0 15px #9333ea; }
    75% { transform: translateY(-5px) rotate(-5deg); text-shadow: 0 0 8px #f472b6; }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="underline-input" placeholder="Underline Neon">
  `,
  css: `
  .underline-input {
    padding: 10px 12px;
    border: none;
    border-bottom: 2px solid #3b82f6;
    background: #111827;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    transition: all 0.3s ease;
  }
  .underline-input:focus {
    outline: none;
    border-bottom-color: #f472b6;
    box-shadow: 0 2px 10px #f472b6;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="dot-ring">
    <span></span><span></span><span></span><span></span>
  </div>
  `,
  css: `
  .dot-ring {
    position: relative;
    width: 50px;
    height: 50px;
  }
  .dot-ring span {
    position: absolute;
    width: 12px;
    height: 12px;
    background: #9333ea;
    border-radius: 50%;
    animation: ringAnim 1s linear infinite;
  }
  .dot-ring span:nth-child(1){ top:0; left:50%; transform: translateX(-50%); animation-delay:0s;}
  .dot-ring span:nth-child(2){ top:50%; right:0; transform: translateY(-50%); animation-delay:0.25s;}
  .dot-ring span:nth-child(3){ bottom:0; left:50%; transform: translateX(-50%); animation-delay:0.5s;}
  .dot-ring span:nth-child(4){ top:50%; left:0; transform: translateY(-50%); animation-delay:0.75s;}
  @keyframes ringAnim {
    0%,100% { transform: scale(1); opacity: 0.3; }
    50% { transform: scale(1.5); opacity: 1; }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="flip-radio">
    <input type="radio" name="group6">
    <span>Yes</span>
  </label>
  <label class="flip-radio">
    <input type="radio" name="group6">
    <span>No</span>
  </label>
  `,
  css: `
  .flip-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .flip-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #3b82f6;
    appearance: none;
    position: relative;
    cursor: pointer;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  .flip-radio input[type="radio"]:checked {
    transform: rotateY(180deg) scale(1.2);
    box-shadow: 0 0 10px #3b82f6, 0 0 15px #9333ea;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="glow-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .glow-toggle {
    position: relative;
    display: inline-block;
    width: 65px;
    height: 34px;
  }
  .glow-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .glow-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #111827;
    border-radius: 34px;
    box-shadow: 0 0 5px #9333ea inset;
    transition: 0.4s;
  }
  .glow-toggle span::before {
    content: "";
    position: absolute;
    width: 28px;
    height: 28px;
    left: 3px;
    top: 3px;
    background: linear-gradient(135deg,#3b82f6,#f472b6);
    border-radius: 50%;
    box-shadow: 0 0 8px #3b82f6;
    transition: 0.4s;
  }
  .glow-toggle input:checked + span::before {
    transform: translateX(31px);
    background: linear-gradient(135deg,#9333ea,#f472b6);
  }
  .glow-toggle input:checked + span {
    box-shadow: 0 0 15px #3b82f6 inset;
  }
`},
//alerts
{
  className: "alerts",
  html: `
<div class="speech-alert">
  <p>💡 Did you know? You can double-click items to edit!</p>
</div>
  `,
  css: `
.speech-alert {
  position: fixed;
  bottom: 40px;
  right: 40px;
  background: #3b82f6;
  color: white;
  font-family: 'Segoe UI', sans-serif;
  padding: 16px 20px;
  border-radius: 12px;
  max-width: 260px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  animation: popIn 0.5s ease-out;
  cursor: pointer;
}

.speech-alert::after {
  content: '';
  position: absolute;
  bottom: -12px;
  right: 20px;
  border-width: 12px 12px 0 12px;
  border-style: solid;
  border-color: #3b82f6 transparent transparent transparent;
}

.speech-alert:hover {
  transform: translateY(-4px);
  transition: transform 0.2s;
}

@keyframes popIn {
  0% { transform: scale(0); opacity: 0; }
  80% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); }
}
  `
},
//button
{ className: "buttons",
  html: `<button class="neon-outline-btn">Explore</button>
  `,
  css: `.neon-outline-btn {
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: transparent;
  border: 3px solid;
  border-image: linear-gradient(45deg, #3b82f6, #9333ea, #f472b6) 1;
  border-radius: 12px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  z-index: 0;
}

.neon-outline-btn::before {
  content: '';
  position: absolute;
  top: 0; left: -100%;
  width: 200%;
  height: 100%;
  background: linear-gradient(45deg, #3b82f6, #9333ea, #f472b6);
  transition: all 0.5s ease;
  z-index: -1;
}

.neon-outline-btn:hover::before {
  left: 0;
}

.neon-outline-btn span {
  position: relative;
  z-index: 1;
}
`},
//cards
{ className: "cards",
  html: `
  <div class="ribbon-card">
    <h2>Ribbon Card</h2>
    <p>Slanted corner ribbon style.</p>
  </div>
  `,
  css: `
  .ribbon-card {
    padding: 20px 28px;
    background: #fbbf24;
    color: #111827;
    border-radius: 12px;
    position: relative;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
  }
  .ribbon-card::before {
    content: '';
    position: absolute;
    top: -10px;
    right: -40px;
    width: 120px;
    height: 40px;
    background: #f43f5e;
    transform: rotate(45deg);
    border-radius: 4px;
  }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="orb-checkbox">
    <input type="checkbox">
    <span>Orb Checkbox</span>
  </label>
  `,
  css: `
  .orb-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
  }
  .orb-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #3b82f6;
    background: radial-gradient(circle, #3b82f6, #9333ea);
    cursor: pointer;
    transition: transform 0.3s;
  }
  .orb-checkbox input[type="checkbox"]:checked {
    transform: scale(1.2);
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="pulse-dropdown">
    <select>
      <option>Pulse Option 1</option>
      <option>Pulse Option 2</option>
      <option>Pulse Option 3</option>
    </select>
  </div>
  `,
  css: `
  .pulse-dropdown select {
    padding: 10px 16px;
    border-radius: 12px;
    border: 2px solid #10b981;
    background: transparent;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    animation: pulseBorder 2s infinite alternate;
  }
  @keyframes pulseBorder {
    0% { box-shadow: 0 0 5px #10b981; }
    100% { box-shadow: 0 0 15px #10b981; }
  }
`},
//icons
{ className: "icons",
  html: `
  <div class="pulse-icon">&#9888;</div>
  `,
  css: `
  .pulse-icon {
    font-size: 60px;
    color: #f59e0b;
    display: inline-block;
    animation: pulse 1s infinite alternate;
  }
  @keyframes pulse {
    0% { transform: scale(1) rotate(0deg); text-shadow: 0 0 2px #f59e0b; }
    50% { transform: scale(1.3) rotate(15deg); text-shadow: 0 0 15px #f59e0b, 0 0 25px #10b981; }
    100% { transform: scale(1) rotate(-10deg); text-shadow: 0 0 2px #9333ea; }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="shadow-border-input" placeholder="Shadow Border Input">
  `,
  css: `
  .shadow-border-input {
    padding: 12px 16px;
    border-radius: 8px;
    border: 2px solid #10b981;
    background: #111827;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    box-shadow: 0 4px 6px rgba(16,185,129,0.3);
    transition: all 0.3s ease;
  }
  .shadow-border-input:focus {
    outline: none;
    border-color: #f59e0b;
    box-shadow: 0 0 10px #f59e0b, 0 0 20px #9333ea;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="bounce-loader">
    <span></span><span></span><span></span>
  </div>
  `,
  css: `
  .bounce-loader {
    display: flex;
    gap: 8px;
  }
  .bounce-loader span {
    width: 14px;
    height: 14px;
    background: linear-gradient(135deg,#f59e0b,#9333ea);
    border-radius: 50%;
    animation: bounce 0.6s infinite alternate;
  }
  .bounce-loader span:nth-child(2) { animation-delay: 0.2s; }
  .bounce-loader span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes bounce {
    0% { transform: translateY(0); }
    100% { transform: translateY(-20px); }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="glow-radio">
    <input type="radio" name="group7">
    <span>Option 1</span>
  </label>
  <label class="glow-radio">
    <input type="radio" name="group7">
    <span>Option 2</span>
  </label>
  `,
  css: `
  .glow-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .glow-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #f59e0b;
    appearance: none;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .glow-radio input[type="radio"]:checked {
    background: #f59e0b;
    box-shadow: 0 0 12px #f59e0b, 0 0 20px #10b981;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="neon-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .neon-toggle {
    position: relative;
    display: inline-block;
    width: 68px;
    height: 36px;
  }
  .neon-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .neon-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #111827;
    border-radius: 36px;
    box-shadow: 0 0 8px #f59e0b inset;
    transition: 0.4s;
  }
  .neon-toggle span::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: 3px;
    top: 3px;
    background: linear-gradient(135deg,#f59e0b,#10b981);
    border-radius: 50%;
    box-shadow: 0 0 10px #f59e0b;
    transition: 0.4s;
  }
  .neon-toggle input:checked + span::before {
    transform: translateX(32px);
    background: linear-gradient(135deg,#9333ea,#f472b6);
  }
  .neon-toggle input:checked + span {
    box-shadow: 0 0 15px #10b981 inset;
  }
`},
//alerts
{ 
  className: "alerts",
  html: `
<div class="holo-alert">
  <div class="orb"></div>
  <div class="text">
    <strong>⚡ System Notice</strong>
    <p>New feature activated!</p>
  </div>
</div>
  `,
  css: `
.holo-alert {
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 16px;
  background: rgba(0,0,0,0.2);
  padding: 20px 28px;
  border-radius: 50px;
  backdrop-filter: blur(12px);
  box-shadow: 0 0 30px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4);
  animation: floatOrb 3s ease-in-out infinite alternate;
  color: #f0f9ff;
  font-family: 'Segoe UI', sans-serif;
}

.holo-alert .orb {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: radial-gradient(circle, #3b82f6, #9333ea);
  box-shadow: 0 0 20px #3b82f6, 0 0 40px #9333ea, 0 0 60px #f472b6;
  animation: glowPulse 2s infinite alternate;
}

.holo-alert .text strong {
  display: block;
  font-size: 1.1rem;
}

.holo-alert .text p {
  margin: 0;
  font-size: 0.9rem;
  line-height: 1.3;
}

@keyframes glowPulse {
  0% { transform: scale(1); box-shadow: 0 0 20px #3b82f6, 0 0 40px #9333ea, 0 0 60px #f472b6; }
  100% { transform: scale(1.2); box-shadow: 0 0 30px #3b82f6, 0 0 60px #9333ea, 0 0 90px #f472b6; }
}

@keyframes floatOrb {
  0% { transform: translateX(-50%) translateY(0); }
  100% { transform: translateX(-50%) translateY(-15px); }
}
  `
},

//button
{ className: "buttons",
  html: `<button class="glass-blur-btn">Submit</button>
  `,
  css: `
  .glass-blur-btn {
  padding: 14px 36px;
  font-size: 1rem;
  color: #fff;
  background: rgba(255,255,255,0.1);
  border: 2px solid rgba(255,255,255,0.2);
  border-radius: 50px;
  backdrop-filter: blur(8px);
  cursor: pointer;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  transition: all 0.3s ease;
}

.glass-blur-btn:hover {
  background: rgba(255,255,255,0.25);
  transform: scale(1.05);
  border-color: rgba(255,255,255,0.4);
}
`},
//cards
{ className: "cards",
  html: `
  <div class="neon-pulse-card">
    <h2>Neon Pulse</h2>
    <p>Glowing neon outline with pulsing effect.</p>
  </div>
  `,
  css: `
  .neon-pulse-card {
    padding: 20px 28px;
    border: 2px solid #3b82f6;
    border-radius: 16px;
    text-align: center;
    color: #3b82f6;
    font-family: 'Segoe UI', sans-serif;
    animation: neonPulse 2s infinite alternate;
  }
  @keyframes neonPulse {
    0% { box-shadow: 0 0 5px #3b82f6; }
    100% { box-shadow: 0 0 20px #9333ea; }
  }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="grid-checkbox">
    <input type="checkbox">
    <span>Grid Checkbox</span>
  </label>
  `,
  css: `
  .grid-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #f0f9ff;
  }
  .grid-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 4px;
    border: 2px solid #111827;
    background: linear-gradient(45deg, #3b82f6, #9333ea);
    cursor: pointer;
    position: relative;
  }
  .grid-checkbox input[type="checkbox"]:checked {
    background: #111827;
    border-color: #f43f5e;
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="gradient-dropdown">
    <select>
      <option>Gradient Option 1</option>
      <option>Gradient Option 2</option>
      <option>Gradient Option 3</option>
    </select>
  </div>
  `,
  css: `
  .gradient-dropdown select {
    padding: 10px 16px;
    border-radius: 12px;
    border: none;
    background: linear-gradient(135deg, #f43f5e, #3b82f6);
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    transition: transform 0.2s;
  }
  .gradient-dropdown select:hover {
    transform: scale(1.05);
  }
`},

//icons
{ className: "icons",
  html: `
  <div class="spin-icon">&#9730;</div>
  `,
  css: `
  .spin-icon {
    font-size: 60px;
    color: #14b8a6;
    display: inline-block;
    animation: spin 2s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg) scale(1); text-shadow: 0 0 2px #14b8a6; }
    50% { transform: rotate(180deg) scale(1.2); text-shadow: 0 0 12px #9333ea, 0 0 20px #3b82f6; }
    100% { transform: rotate(360deg) scale(1); text-shadow: 0 0 2px #f472b6; }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="glass-input" placeholder="Glassmorphism Input">
  `,
  css: `
  .glass-input {
    padding: 12px 16px;
    border-radius: 14px;
    border: none;
    background: rgba(255,255,255,0.05);
    backdrop-filter: blur(6px);
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    box-shadow: 0 4px 6px rgba(0,0,0,0.2);
    transition: all 0.3s ease;
  }
  .glass-input:focus {
    outline: none;
    background: rgba(255,255,255,0.1);
    box-shadow: 0 0 15px #3b82f6, 0 0 20px #9333ea;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="flip-loader">
    <span></span><span></span><span></span>
  </div>
  `,
  css: `
  .flip-loader {
    display: flex;
    gap: 8px;
  }
  .flip-loader span {
    width: 14px;
    height: 14px;
    background: linear-gradient(135deg,#14b8a6,#9333ea);
    border-radius: 4px;
    animation: flip 0.8s infinite alternate;
  }
  .flip-loader span:nth-child(2){ animation-delay:0.2s; }
  .flip-loader span:nth-child(3){ animation-delay:0.4s; }
  @keyframes flip {
    0% { transform: rotateX(0deg) scale(1); }
    50% { transform: rotateX(180deg) scale(1.3); }
    100% { transform: rotateX(360deg) scale(1); }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="shadow-radio">
    <input type="radio" name="group8">
    <span>Yes</span>
  </label>
  <label class="shadow-radio">
    <input type="radio" name="group8">
    <span>No</span>
  </label>
  `,
  css: `
  .shadow-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .shadow-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #3b82f6;
    appearance: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    position: relative;
  }
  .shadow-radio input[type="radio"]:checked {
    box-shadow: 0 0 8px #3b82f6, 0 0 12px #9333ea inset;
    background: #14b8a6;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="slide-glow-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .slide-glow-toggle {
    position: relative;
    display: inline-block;
    width: 72px;
    height: 36px;
  }
  .slide-glow-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .slide-glow-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #111827;
    border-radius: 36px;
    box-shadow: 0 0 8px #14b8a6 inset;
    transition: 0.4s;
  }
  .slide-glow-toggle span::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    left: 2px;
    top: 2px;
    background: linear-gradient(135deg,#3b82f6,#9333ea);
    border-radius: 50%;
    box-shadow: 0 0 10px #3b82f6;
    transition: 0.4s;
  }
  .slide-glow-toggle input:checked + span::before {
    transform: translateX(34px);
    background: linear-gradient(135deg,#f472b6,#f59e0b);
  }
  .slide-glow-toggle input:checked + span {
    box-shadow: 0 0 15px #9333ea inset;
  }
`},

//alerts
{
  className: "alerts",
  html: `
<div class="slide-alert">
  <p>📢 Update Available! Click here to view details.</p>
  <button>&times;</button>
</div>
  `,
  css: `
.slide-alert {
  position: fixed;
  top: 20%;
  left: -300px; /* hidden off-screen */
  width: 280px;
  background: #fbbf24;
  color: #1f2937;
  padding: 16px 20px;
  border-radius: 0 12px 12px 0;
  box-shadow: 4px 4px 20px rgba(0,0,0,0.2);
  font-family: 'Segoe UI', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  animation: slideIn 0.6s forwards;
}

.slide-alert button {
  background: transparent;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #1f2937;
  transition: transform 0.2s;
}

.slide-alert button:hover {
  transform: scale(1.2);
}

@keyframes slideIn {
  0% { left: -300px; opacity: 0; }
  100% { left: 20px; opacity: 1; }
}
  `
},

//button
{ className: "buttons",
  html: `
  <button class="holo-btn"><span>Launch</span></button>
  `,
  css: `
  .holo-btn {
  position: relative;
  padding: 16px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  color: #fff;
  background: linear-gradient(135deg, #3b82f6, #9333ea);
  border: none;
  border-radius: 50px;
  cursor: pointer;
  overflow: hidden;
  perspective: 800px;
  transition: transform 0.3s ease;
}

.holo-btn span {
  position: relative;
  z-index: 1;
}

.holo-btn::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: conic-gradient(#3b82f6, #9333ea, #f472b6, #3b82f6);
  filter: blur(30px);
  border-radius: 50%;
  opacity: 0.7;
  animation: holoGlow 3s linear infinite;
  z-index: 0;
}

.holo-btn:hover {
  transform: rotateX(15deg) rotateY(15deg) scale(1.1);
}

@keyframes holoGlow {
  0% { transform: rotate(0deg); }
  50% { transform: rotate(180deg); }
  100% { transform: rotate(360deg); }
}
`},

//cards
{ className: "cards",
  html: `
  <div class="grid-card">
    <h2>Grid Card</h2>
    <p>Futuristic grid pattern overlay.</p>
  </div>
  `,
  css: `
  .grid-card {
    padding: 20px 28px;
    background: #111827;
    color: #f0f9ff;
    border-radius: 16px;
    text-align: center;
    font-family: 'Segoe UI', sans-serif;
    position: relative;
    overflow: hidden;
  }
  .grid-card::after {
    content: '';
    position: absolute;
    top: 0; left: 0;
    width: 100%; height: 100%;
    background-image: linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
    background-size: 20px 20px;
    pointer-events: none;
  }
`},
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="gradient-checkbox">
    <input type="checkbox">
    <span>Gradient Checkbox</span>
  </label>
  `,
  css: `
  .gradient-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
  }
  .gradient-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: none;
    background: linear-gradient(135deg, #f43f5e, #3b82f6);
    cursor: pointer;
    transition: all 0.3s;
  }
  .gradient-checkbox input[type="checkbox"]:checked {
    box-shadow: 0 0 10px #f43f5e, 0 0 20px #3b82f6;
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="neon-dropdown">
    <select>
      <option>Neon Option 1</option>
      <option>Neon Option 2</option>
      <option>Neon Option 3</option>
    </select>
  </div>
  `,
  css: `
  .neon-dropdown select {
    padding: 10px 16px;
    border-radius: 12px;
    border: 2px solid #3b82f6;
    background: transparent;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    box-shadow: 0 0 5px #3b82f6;
    transition: all 0.3s ease;
  }
  .neon-dropdown select:hover {
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
    border-color: #9333ea;
  }
`} ,

//icons
{ className: "icons",
  html: `
  <div class="flip-star">&#9733;</div>
  `,
  css: `
  .flip-star {
    font-size: 60px;
    color: #f472b6;
    display: inline-block;
    animation: flip 1.5s ease-in-out infinite;
  }
  @keyframes flip {
    0%,100% { transform: rotateY(0deg) scale(1); text-shadow: 0 0 2px #f472b6; }
    50% { transform: rotateY(180deg) scale(1.4); text-shadow: 0 0 15px #9333ea, 0 0 25px #3b82f6; }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="gradient-border-input" placeholder="Gradient Border Input">
  `,
  css: `
  .gradient-border-input {
    padding: 12px 16px;
    border: 2px solid transparent;
    border-radius: 12px;
    background: #111827;
    color: #fff;
    font-family: 'Segoe UI', sans-serif;
    background-image: linear-gradient(#111827,#111827), linear-gradient(135deg,#3b82f6,#f472b6);
    background-origin: border-box;
    background-clip: content-box, border-box;
    transition: all 0.3s ease;
  }
  .gradient-border-input:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 10px #3b82f6;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="orbit-loader">
    <span></span>
  </div>
  `,
  css: `
  .orbit-loader {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    position: relative;
  }
  .orbit-loader span {
    display: block;
    width: 12px;
    height: 12px;
    background: #9333ea;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left: 50%;
    transform-origin: -14px 20px;
    animation: orbit 1s linear infinite;
  }
  @keyframes orbit {
    0% { transform: rotate(0deg) translateX(0); }
    100% { transform: rotate(360deg) translateX(0); }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="neon-radio">
    <input type="radio" name="group9">
    <span>Red</span>
  </label>
  <label class="neon-radio">
    <input type="radio" name="group9">
    <span>Green</span>
  </label>
  `,
  css: `
  .neon-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .neon-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #f472b6;
    appearance: none;
    cursor: pointer;
    transition: box-shadow 0.3s ease, transform 0.3s ease;
    position: relative;
  }
  .neon-radio input[type="radio"]:checked {
    box-shadow: 0 0 12px #f472b6, 0 0 20px #3b82f6;
    transform: scale(1.2);
    background: #3b82f6;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="shadow-slide-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .shadow-slide-toggle {
    position: relative;
    display: inline-block;
    width: 70px;
    height: 36px;
  }
  .shadow-slide-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .shadow-slide-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #111827;
    border-radius: 36px;
    box-shadow: 0 0 8px #9333ea inset;
    transition: 0.4s;
  }
  .shadow-slide-toggle span::before {
    content: "";
    position: absolute;
    width: 32px;
    height: 32px;
    left: 2px;
    top: 2px;
    background: #f472b6;
    border-radius: 50%;
    box-shadow: 0 0 10px #3b82f6;
    transition: 0.4s;
  }
  .shadow-slide-toggle input:checked + span::before {
    transform: translateX(34px);
    background: linear-gradient(135deg,#9333ea,#f472b6);
  }
  .shadow-slide-toggle input:checked + span {
    box-shadow: 0 0 15px #3b82f6 inset;
  }
`},
//alerts
{ 
  className: "alerts",
  html: `
<div class="neon-alert">
  <div class="ring"></div>
  <div class="content">
    <strong>💥 Alert!</strong>
    <p>Action successfully completed.</p>
  </div>
</div>
  `,
  css: `
.neon-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 28px;
  border-radius: 50px;
  background: rgba(0,0,0,0.2);
  backdrop-filter: blur(12px);
  box-shadow: 0 0 40px rgba(59,130,246,0.4), 0 0 60px rgba(236,72,153,0.3);
  font-family: 'Segoe UI', sans-serif;
  color: #f0f9ff;
  animation: floatAlert 3s ease-in-out infinite alternate;
}

.neon-alert .ring {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background: conic-gradient(#3b82f6, #9333ea, #f472b6, #3b82f6);
  animation: spin 2s linear infinite;
  box-shadow: 0 0 20px #3b82f6, 0 0 40px #9333ea, 0 0 60px #f472b6;
}

.neon-alert .content strong {
  display: block;
  font-size: 1.2rem;
}

.neon-alert .content p {
  margin: 0;
  font-size: 0.95rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

@keyframes floatAlert {
  0% { transform: translate(-50%, -50%) translateY(0); }
  100% { transform: translate(-50%, -50%) translateY(-12px); }
}
  `
},

//button
{ className: "buttons",
  html: `<button class="pulse-btn">Go!</button>
  `,
  css: `
  .pulse-btn {
  padding: 14px 36px;
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
  background: #10b981;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  box-shadow: 0 0 0 rgba(16,185,129,0.7);
  animation: pulseShadow 2s infinite;
  transition: transform 0.2s;
}

.pulse-btn:hover {
  transform: scale(1.1);
}

@keyframes pulseShadow {
  0% { box-shadow: 0 0 0 rgba(16,185,129,0.7); }
  50% { box-shadow: 0 0 20px rgba(16,185,129,0.7); }
  100% { box-shadow: 0 0 0 rgba(16,185,129,0.7); }
}
`},

//cards
//checkboxes
{ className: "checkboxes",
  html: `
  <label class="pulse-neon-checkbox">
    <input type="checkbox">
    <span>Pulse Neon</span>
  </label>
  `,
  css: `
  .pulse-neon-checkbox {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
  }
  .pulse-neon-checkbox input[type="checkbox"] {
    width: 20px;
    height: 20px;
    border-radius: 6px;
    border: 2px solid #9333ea;
    background: transparent;
    cursor: pointer;
    animation: neonPulse 2s infinite alternate;
  }
  .pulse-neon-checkbox input[type="checkbox"]:checked {
    background: #9333ea;
    box-shadow: 0 0 15px #3b82f6, 0 0 25px #9333ea;
  }
  @keyframes neonPulse {
    0% { box-shadow: 0 0 5px #9333ea; }
    100% { box-shadow: 0 0 20px #3b82f6; }
  }
`},
//dropdowns
{ className: "dropdowns",
  html: `
  <div class="glass-dropdown">
    <select>
      <option>Glass Option 1</option>
      <option>Glass Option 2</option>
      <option>Glass Option 3</option>
    </select>
  </div>
  `,
  css: `
  .glass-dropdown select {
    padding: 10px 16px;
    border-radius: 12px;
    border: none;
    background: rgba(255,255,255,0.1);
    backdrop-filter: blur(8px);
    color: #f0f9ff;
    font-family: 'Segoe UI', sans-serif;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  .glass-dropdown select:hover {
    background: rgba(255,255,255,0.2);
  }
`},

//icons
{ className: "icons",
  html: `
  <div class="glitch-icon">&#9881;</div>
  `,
  css: `
  .glitch-icon {
    font-size: 60px;
    color: #f472b6;
    position: relative;
    display: inline-block;
    animation: glitch 1s infinite;
  }
  @keyframes glitch {
    0% { transform: translate(0,0); color: #f472b6; }
    20% { transform: translate(-2px,2px); color: #3b82f6; }
    40% { transform: translate(2px,-2px); color: #9333ea; }
    60% { transform: translate(-2px,-2px); color: #f59e0b; }
    80% { transform: translate(2px,2px); color: #10b981; }
    100% { transform: translate(0,0); color: #f472b6; }
  }
`},

//Inputs
{ className: "inputs",
  html: `
  <input type="text" class="shadow-glow-input" placeholder="Shadow Glow Input">
  `,
  css: `
  .shadow-glow-input {
    padding: 12px 16px;
    border: 2px solid transparent;
    border-radius: 10px;
    background: #111827;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    box-shadow: 0 0 5px rgba(59,130,246,0.5);
    transition: all 0.3s ease;
  }
  .shadow-glow-input:focus {
    outline: none;
    border-color: #9333ea;
    box-shadow: 0 0 12px #3b82f6, 0 0 18px #9333ea;
  }
`},

//loaders
{ className: "loaders",
  html: `
  <div class="spiral-loader">
    <span></span>
    <span></span>
    <span></span>
  </div>
  `,
  css: `
  .spiral-loader {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;
  }
  .spiral-loader span {
    width: 10px;
    height: 10px;
    background: linear-gradient(135deg,#f472b6,#3b82f6);
    border-radius: 50%;
    animation: spiral 0.8s linear infinite;
  }
  .spiral-loader span:nth-child(2){ animation-delay: 0.2s; }
  .spiral-loader span:nth-child(3){ animation-delay: 0.4s; }
  @keyframes spiral {
    0% { transform: rotate(0deg) translateX(0); }
    50% { transform: rotate(180deg) translateX(8px); }
    100% { transform: rotate(360deg) translateX(0); }
  }
`},

//radio buttons
{ className: "radioButtons",
  html: `
  <label class="gradient-radio">
    <input type="radio" name="group10">
    <span>One</span>
  </label>
  <label class="gradient-radio">
    <input type="radio" name="group10">
    <span>Two</span>
  </label>
  `,
  css: `
  .gradient-radio {
    display: flex;
    align-items: center;
    gap: 10px;
    font-family: 'Segoe UI', sans-serif;
    color: #fff;
    cursor: pointer;
    margin-bottom: 6px;
  }
  .gradient-radio input[type="radio"] {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #3b82f6;
    appearance: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;
  }
  .gradient-radio input[type="radio"]:checked {
    background: linear-gradient(135deg,#f472b6,#9333ea);
    box-shadow: 0 0 10px #f472b6, 0 0 20px #3b82f6;
  }
`},

//toggle switches
{ className: "toggleSwitches",
  html: `
  <label class="orbit-toggle">
    <input type="checkbox">
    <span></span>
  </label>
  `,
  css: `
  .orbit-toggle {
    position: relative;
    display: inline-block;
    width: 68px;
    height: 36px;
  }
  .orbit-toggle input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .orbit-toggle span {
    position: absolute;
    top: 0; left: 0;
    right: 0; bottom: 0;
    background: #111827;
    border-radius: 36px;
    box-shadow: 0 0 6px #9333ea inset;
    transition: 0.4s;
  }
  .orbit-toggle span::before {
    content: "";
    position: absolute;
    width: 30px;
    height: 30px;
    left: 3px;
    top: 3px;
    background: linear-gradient(135deg,#3b82f6,#f472b6);
    border-radius: 50%;
    box-shadow: 0 0 10px #3b82f6;
    transition: 0.4s;
  }
  .orbit-toggle input:checked + span::before {
    transform: translateX(32px) rotate(30deg);
    background: linear-gradient(135deg,#f59e0b,#9333ea);
  }
  .orbit-toggle input:checked + span {
    box-shadow: 0 0 15px #3b82f6 inset;
  }
`},

//alerts
{
  className: "alerts",
  html: `
<div class="wow-alert">🚀 Go!</div>
  `,
  css: `
.wow-alert {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  border-radius: 50%;
  background: conic-gradient(#3b82f6, #f43f5e, #fbbf24, #3b82f6);
  animation: rotateGlow 2s linear infinite, pop 0.8s ease-out;
  box-shadow: 0 0 30px #3b82f6, 0 0 60px #f43f5e, 0 0 90px #fbbf24;
  text-align: center;
  cursor: pointer;
}

@keyframes rotateGlow {
  0% { transform: translate(-50%, -50%) rotate(0deg); }
  100% { transform: translate(-50%, -50%) rotate(360deg); }
}

@keyframes pop {
  0% { transform: translate(-50%, -50%) scale(0); }
  80% { transform: translate(-50%, -50%) scale(1.1); }
  100% { transform: translate(-50%, -50%) scale(1); }
}
  `
}
];

// rgb to hex
const rgbToHex = (rgb) => {
  const result = rgb.match(/\d+/g);
  if (!result) return "#ffffff";
  return "#" + result.slice(0,3).map(x => (+x).toString(16).padStart(2,"0")).join("").toUpperCase();
}

// ui element box
function createBox(boxData, index) {
const container = document.createElement("div");
container.className = `box ${boxData.className}`;

container.innerHTML = `
  <div class="x">
    <div class="elementDisplay preview">
      <div class="xFeatureDiv">
        <div class="backgroundToggle xFeatures hideXFeatures" title="Mode"></div>                                                                   
        <div class="backgroundColorSelector xFeatures hideXFeatures" title="Background Color Selector"></div>
        <div class="backgroundColorCode xFeatures hideXFeatures"><p>#FFFFFF</p></div>                                
      </div>
      <iframe></iframe>                        
    </div>
  </div>
  <div class="y">
    <div class="yFeaturesDiv">
      <div class="closeBtn yFeatures">&times;</div>
      <div class="copyCode yFeatures"><button>&#128203</button></div>
    </div>
    <div class="yCode">
      <div class="yCodeFeatures">              
        <div class="htmlCodeBtn yCodeFeature">
          <img src="assets/icons/htmlLogo.png" class="htmlLogoImage" alt="HTML5 Logo"><p>HTML</p>
        </div>
        <div class="cssCodeBtn yCodeFeature">
          <img src="assets/icons/cssLogo.png" class="cssLogoImage" alt="Css3 Logo"><p>CSS</p>
        </div>
      </div>
      <div class="code editor">                                
        <textarea class="htmlCode codeEditor">${boxData.html.trim()}</textarea>                            
        <textarea class="cssCode codeEditor">${boxData.css.trim()}</textarea>                            
      </div>
    </div>
  </div>
`;

const htmlBox = container.querySelector('.htmlCode');
const cssBox = container.querySelector('.cssCode');
const frame = container.querySelector('iframe');
const previewContainer = container.querySelector('.elementDisplay.preview');
const toggleBtn = previewContainer.querySelector(".backgroundToggle");
const colorSelector = previewContainer.querySelector(".backgroundColorSelector");
const colorCodeDisplay = previewContainer.querySelector(".backgroundColorCode p");

// Update iframe preview
const updatePreview = () => {
  const html = htmlBox.value;
  const css = `<style>${cssBox.value}</style>`;
  frame.srcdoc = html + css;
};

htmlBox.addEventListener('input', updatePreview);
cssBox.addEventListener('input', updatePreview);
updatePreview();

const getIframeBody = () => frame.contentDocument || frame.contentWindow.document;

const initSelectors = () => {
  const body = getIframeBody().body;
  let bgColor = rgbToHex(window.getComputedStyle(body).backgroundColor);
  colorSelector.style.backgroundColor = bgColor;
  colorCodeDisplay.textContent = bgColor;

  if (body.classList.contains("dark-mode") || bgColor === "#1E1E1E" || bgColor === "#111111") {
    body.classList.add("dark-mode");
    toggleBtn.style.backgroundColor = "#1E1E1E";
  } else {
    body.classList.remove("dark-mode");
    toggleBtn.style.backgroundColor = "#FFFFFF";
  }
};

frame.addEventListener("load", initSelectors);
setTimeout(initSelectors, 100);

// Light/Dark mode toggle
toggleBtn.addEventListener('click', () => {
  const body = getIframeBody().body;
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.style.backgroundColor = "#ffffff";
    body.style.color = "#000000";
    toggleBtn.style.backgroundColor = "#FFFFFF";
    colorSelector.style.backgroundColor = "#FFFFFF";
    colorCodeDisplay.textContent = "#FFFFFF";
  } else {
    body.classList.add('dark-mode');
    body.style.backgroundColor = "#1e1e1e";
    body.style.color = "#ffffff";
    toggleBtn.style.backgroundColor = "#1E1E1E";
    colorSelector.style.backgroundColor = "#1E1E1E";
    colorCodeDisplay.textContent = "#1E1E1E";
  }
});

// Background color selector 
colorSelector.addEventListener('click', () => {
  const colorInput = document.createElement("input");
  colorInput.type = "color";
  const body = getIframeBody().body;
  const currentBg = window.getComputedStyle(body).backgroundColor;
  colorInput.value = rgbToHex(currentBg);
  colorInput.style.position = "fixed"; 
  colorInput.style.left = "-9999px";
  document.body.appendChild(colorInput);
  colorInput.click();
  colorInput.addEventListener("input", () => {
    const color = colorInput.value;
    body.style.backgroundColor = color;
    colorSelector.style.backgroundColor = color;
    colorCodeDisplay.textContent = color.toUpperCase();
    const rgb = color.slice(1);
    const isDark = parseInt(rgb.slice(0,2),16)*0.299 + parseInt(rgb.slice(2,4),16)*0.587 + parseInt(rgb.slice(4,6),16)*0.114 < 128;
    toggleBtn.style.backgroundColor = isDark ? "#1E1E1E" : "#FFFFFF";
    if(isDark) body.classList.add("dark-mode"); else body.classList.remove("dark-mode");
  });
  colorInput.addEventListener("change", () => document.body.removeChild(colorInput));
});

  return container;
}

window.addEventListener("DOMContentLoaded", () => {
  const scrollContainer = document.getElementById("b");

  if (!scrollContainer) return console.error("Container #b not found!");

  // Adding defaultSnippets to #b
  defaultSnippets.forEach((boxData, i) => {
    const box = createBox(boxData, i);
    scrollContainer.appendChild(box);
  });

  // Open elements
const b = document.getElementById('b');
const items = document.querySelectorAll('.box');

items.forEach(item  => {
  const x = item.querySelector('.x');

  x.addEventListener('click', () => {
    document.querySelectorAll('.item.expanded').forEach(open => open.classList.remove('expanded'));

    const rect = b.getBoundingClientRect();
    b.style.overflow = 'hidden';

    document.documentElement.style.setProperty('--b-top', rect.top + 'px');
    document.documentElement.style.setProperty('--b-left', rect.left + 'px');
    document.documentElement.style.setProperty('--b-width', rect.width + 'px');
    document.documentElement.style.setProperty('--b-height', rect.height + 'px');

    item.classList.add('expanded');
  });

});

document.querySelectorAll(".yCode").forEach(block => {
  const htmlBtn = block.querySelector(".htmlCodeBtn");
  const cssBtn = block.querySelector(".cssCodeBtn");

  const htmlTextarea = block.querySelector(".htmlCode");
  const cssTextarea = block.querySelector(".cssCode");

  function showEditor(activeTextarea, activeBtn) {
    htmlTextarea.classList.remove("active");
    cssTextarea.classList.remove("active");

    htmlBtn.classList.remove("active");
    cssBtn.classList.remove("active");

    activeTextarea.classList.add("active");
    activeBtn.classList.add("active");
  }

  htmlBtn.addEventListener("click", () => showEditor(htmlTextarea, htmlBtn));
  cssBtn.addEventListener("click", () => showEditor(cssTextarea, cssBtn));

  // Showing HTML by default
  showEditor(htmlTextarea, htmlBtn);
});

const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
  const yCode = box.querySelector(".yCode");
  const htmlBtn = yCode.querySelector(".htmlCodeBtn");
  const cssBtn = yCode.querySelector(".cssCodeBtn");
  const htmlTextarea = yCode.querySelector(".htmlCode");
  const cssTextarea = yCode.querySelector(".cssCode");
  const copyBtn = box.querySelector(".copyCode button");
  const closeBtn = box.querySelector(".closeBtn");

  // Show textarea based on button
  function showEditor(activeTextarea, activeBtn) {
    htmlTextarea.classList.remove("active");
    cssTextarea.classList.remove("active");
    htmlBtn.classList.remove("active");
    cssBtn.classList.remove("active");

    activeTextarea.classList.add("active");
    activeBtn.classList.add("active");
  }

  htmlBtn.addEventListener("click", () => showEditor(htmlTextarea, htmlBtn));
  cssBtn.addEventListener("click", () => showEditor(cssTextarea, cssBtn));

  // Copy button
  copyBtn.addEventListener("click", () => {
    let activeTextarea = htmlTextarea.classList.contains("active") ? htmlTextarea : cssTextarea;
    activeTextarea.select();
    activeTextarea.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(activeTextarea.value)
      .then(() => alert("Code copied!"))
      .catch(err => console.error("Failed to copy: ", err));
  });

  // Close button
  closeBtn.addEventListener("click", () => {
    box.classList.remove("expanded");
    const scrollContainer = document.querySelector(".scrollElements");
    scrollContainer.style.overflowY = "hidden";
    // force reflow 
    void scrollContainer.offsetHeight;           
    scrollContainer.style.overflowY = "auto";   
  });

  box.addEventListener("click", e => {
    if (e.target.closest(".yFeatures") || box.classList.contains("expanded")) return;

    document.querySelectorAll(".box.expanded").forEach(b => {
      if (b !== box) b.classList.remove("expanded");
    });

    box.classList.add("expanded");

    // HTML textarea by default when expanded
    showEditor(htmlTextarea, htmlBtn);
  });
});
});


// Category from a button's onclick attribute
function getButtonCategory(btn) {
    const onclickAttr = btn.getAttribute('onclick');
    const match = onclickAttr ? onclickAttr.match(/filterDivs\('(.+)'\)/) : null;
    return match ? match[1] : null;
}

// Set active button by category
function setActiveButton(category) {
    const buttons = document.querySelectorAll('#elementBar button');
    let buttonMatched = false;

    buttons.forEach(btn => {
        const btnCategory = getButtonCategory(btn);
        if (btnCategory === category) {
            btn.classList.add('active');
            buttonMatched = true;
        } else {
            btn.classList.remove('active');
        }
    });

    // If no button matches, keep "All" active
    if (!buttonMatched) {
        buttons.forEach(btn => {
            if (getButtonCategory(btn) === 'all') {
                btn.classList.add('active');
            }
        });
    }
}

// Filter category
function filterDivs(category) {
    const divs = document.querySelectorAll('.box');
    let found = false;

    divs.forEach(div => {
        const classes = Array.from(div.classList);
        if (category === 'all' || classes.some(c => c.includes(category))) {
            div.classList.remove('hide');
            found = true;
        } else {
            div.classList.add('hide');
        }
    });

    // If nothing matches, show divs with class "all"
    if (!found) {
        divs.forEach(div => {
            if (div.classList.contains('all')) {
                div.classList.remove('hide');
            } else {
                div.classList.add('hide');
            }
        });
    }

    // Highlight active button
    setActiveButton(category);
}

// "All" button by default
window.addEventListener('DOMContentLoaded', () => {
    filterDivs('all');

    // Checking for search query in URL
    const params = new URLSearchParams(window.location.search);
    const searchQuery = params.get('search')?.toLowerCase().trim();

    if (searchQuery) {
        // Finding matching box category
        const divs = Array.from(document.querySelectorAll('.box'));
        let matchedCategory = 'all';

        for (let div of divs) {
            const classes = Array.from(div.classList);
            const match = classes.find(c => c.includes(searchQuery) && c !== 'all');
            if (match) {
                matchedCategory = match;
                break;
            }
        }

        filterDivs(matchedCategory);
    }
});

//First 10 curated snippets
const curatedSnippets = defaultSnippets.slice(0, 10);

// IDs of the divs in heroSectionElements
const snippetDivIds = [
  "divNo1","divNo2","divNo3","divNo4","divNo5",
  "divNo6","divNo7","divNo8","divNo9","divNo10"
];

snippetDivIds.forEach((id, index) => {
  const div = document.getElementById(id);
  if (!div) return;

  const snippet = curatedSnippets[index];
  
  // Create iframe
  const iframe = document.createElement('iframe');
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  
  // Snippet HTML + CSS into iframe
  iframe.onload = () => {
    const doc = iframe.contentDocument || iframe.contentWindow.document;
    doc.open();
    doc.write(`
      <html>
        <head>
          <style>
            ${snippet.css}
          </style>
        </head>
        <body style="
          margin:0; 
          display:flex; 
          justify-content:center; 
          align-items:center; 
          height:100vh;
          width:100vw;
        ">
          ${snippet.html}
        </body>
      </html>
    `);
    doc.close();
  };

  div.appendChild(iframe);
});


const filterIcon = document.getElementById('filterIcon');
const filterDiv = document.getElementById('elementBar');
const filterCloseBtn = document.getElementById('filterCloseBtn');

// Open on icon click 
filterIcon.addEventListener('click', () => {
  if (window.innerWidth <= 768) {
    filterDiv.style.display = 'block';
  }
});

// Close on close button click
filterCloseBtn.addEventListener('click', () => {
  filterDiv.style.display = 'none';
});
