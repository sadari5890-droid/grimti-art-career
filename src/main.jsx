import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, BookOpen, Check, ChevronDown, Compass, Menu, Palette, School, Sparkles, Target, X } from 'lucide-react';
import './styles.css';

const stages = [
  { id: '유아', age: '5–7세', title: '좋아하는 마음 발견', desc: '결과보다 과정에 집중하며 관찰력과 표현의 즐거움을 키워요.', color: '#F3A48F', items: ['다양한 재료 경험', '관찰·표현 습관', '부모 관찰 체크'] },
  { id: '초등', age: '8–13세', title: '소질과 흥미 확인', desc: '아이의 강점이 표현력인지, 관찰력인지 구체적으로 살펴봐요.', color: '#E8BE5D', items: ['소질 진단', '창의·기초 균형', '예중 준비 판단'] },
  { id: '중등', age: '14–16세', title: '진로 방향 구체화', desc: '예고·일반고 선택과 실기 시작 시점을 성적과 함께 설계해요.', color: '#79A89C', items: ['예고/일반고 비교', '내신 관리', '전공 탐색'] },
  { id: '고등', age: '17–19세', title: '합격 전략 설계', desc: '성적과 실기 강점에 맞춰 대학·전형·실기 로드맵을 정교화해요.', color: '#6C79A8', items: ['대학별 전형', '수시/정시 전략', '실기 완성도'] },
];

const grades = {
  상위권: { label: '상위권', headline: '성적 강점을 살린 선택의 폭 넓히기', body: '학생부·수능 경쟁력을 유지하면서 실기 비중이 낮거나 단계별 전형을 포함해 상향 지원 범위를 넓힙니다.', steps: ['주요 교과와 수능 최저 우선 관리', '실기·비실기 전형을 함께 비교', '상향·적정·안정 지원군 구성'] },
  중위권: { label: '중위권', headline: '실기와 성적의 균형점 찾기', body: '현재 성적에서 향상 가능한 과목을 선별하고, 실기 반영 비율이 적합한 대학군을 중심으로 전략을 만듭니다.', steps: ['유지 과목과 향상 과목 분리', '실기 유형별 적합도 진단', '수시 6회 지원 조합 시뮬레이션'] },
  하위권: { label: '하위권', headline: '실기 강점을 확실한 무기로 만들기', body: '실기 반영이 높고 학생의 표현 강점과 맞는 전형을 찾되, 지원 가능성을 높일 최소 학업선도 함께 관리합니다.', steps: ['강점 실기 유형 집중 선택', '반영 과목이 유리한 대학 탐색', '전문대·특성화 학과까지 확장'] },
};

const articles = [
  { tag: '초등', title: '우리 아이, 미술에 소질이 있는 걸까요?', meta: '5분 읽기', tone: '#F6D9CE' },
  { tag: '중등', title: '예중·예고 준비, 언제 시작해야 할까요?', meta: '7분 읽기', tone: '#DFEAE6' },
  { tag: '고등', title: '미대 수시와 정시, 무엇이 다를까요?', meta: '8분 읽기', tone: '#DFE2EF' },
];

function App() {
  const [menu, setMenu] = useState(false);
  const [grade, setGrade] = useState('중위권');
  const [school, setSchool] = useState('고등');
  const [goal, setGoal] = useState('4년제 미대');
  const [result, setResult] = useState(false);
  const [openFaq, setOpenFaq] = useState(0);
  const plan = useMemo(() => grades[grade], [grade]);

  const scrollTo = (id) => { document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' }); setMenu(false); };

  return <>
    <header>
      <button className="brand" onClick={() => scrollTo('home')} aria-label="홈으로">
        <span className="brand-mark"><Palette size={19}/></span><span>그림티</span><small>미술진로센터</small>
      </button>
      <nav className={menu ? 'open' : ''}>
        <button onClick={() => scrollTo('stages')}>단계별 가이드</button>
        <button onClick={() => scrollTo('roadmap')}>진로 로드맵</button>
        <button onClick={() => scrollTo('info')}>입시 정보</button>
        <button onClick={() => scrollTo('about')}>그림티 이야기</button>
      </nav>
      <button className="consult" onClick={() => scrollTo('roadmap')}>나의 로드맵 만들기 <ArrowRight size={16}/></button>
      <button className="menu" onClick={() => setMenu(!menu)} aria-label="메뉴">{menu ? <X/> : <Menu/>}</button>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><Sparkles size={15}/> 30년 교육 노하우로 찾는 우리 아이의 길</div>
          <h1>미술을 좋아하는 마음이<br/><em>진로가 되는 순간까지</em></h1>
          <p>유아의 첫 그림부터 미대 합격까지. 막막했던 미술 진로를 아이의 성향, 성적, 실기에 맞춰 한 걸음씩 안내합니다.</p>
          <div className="hero-actions">
            <button className="primary" onClick={() => scrollTo('roadmap')}>무료 진로 로드맵 시작하기 <ArrowRight size={18}/></button>
            <button className="text-btn" onClick={() => scrollTo('stages')}>연령별 가이드 보기</button>
          </div>
          <div className="trust"><span>✓ 회원가입 없이 바로</span><span>✓ 약 2분 소요</span><span>✓ 맞춤 결과 제공</span></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="sun"></div><div className="paper"><span className="line one"></span><span className="line two"></span><span className="line three"></span><Palette size={42}/><b>나만의 길을<br/>그려보세요</b></div>
          <div className="shape coral"></div><div className="shape green"></div><div className="pencil"></div>
        </div>
      </section>

      <section className="stages section" id="stages">
        <div className="section-head"><div><span className="kicker">AGE GUIDE</span><h2>지금 우리 아이에게<br/>필요한 미술교육은?</h2></div><p>아이의 성장 속도에 맞는 질문과 답을 준비했어요.<br/>각 단계에서 놓치지 말아야 할 핵심을 확인해 보세요.</p></div>
        <div className="stage-grid">{stages.map((s, i) => <article className="stage-card" key={s.id} style={{'--accent': s.color}}>
          <div className="stage-top"><span>0{i+1}</span><Palette size={25}/></div><small>{s.age}</small><h3>{s.id} · {s.title}</h3><p>{s.desc}</p>
          <ul>{s.items.map(x => <li key={x}><Check size={14}/>{x}</li>)}</ul><button onClick={() => scrollTo('roadmap')}>자세히 알아보기 <ArrowRight size={15}/></button>
        </article>)}</div>
      </section>

      <section className="roadmap section" id="roadmap">
        <div className="roadmap-intro"><span className="kicker light">MY ROADMAP</span><h2>성적만으로 결정하지 않는<br/>나만의 미술입시 전략</h2><p>현재 위치와 목표를 알려주세요. 그림티의 30년 경험을 바탕으로 지금 해야 할 일을 정리해 드려요.</p>
          <div className="credentials"><div><strong>30년</strong><span>교육 현장 경험</span></div><div><strong>1:1</strong><span>개인별 맞춤 설계</span></div><div><strong>A–Z</strong><span>학습·실기 통합 관리</span></div></div>
        </div>
        <div className="planner">
          <div className="planner-step"><label><span>1</span> 현재 학교급</label><div className="choices">{['초등','중등','고등'].map(x=><button className={school===x?'selected':''} onClick={()=>{setSchool(x);setResult(false)}} key={x}>{x}</button>)}</div></div>
          <div className="planner-step"><label><span>2</span> 현재 성적대</label><div className="choices">{Object.keys(grades).map(x=><button className={grade===x?'selected':''} onClick={()=>{setGrade(x);setResult(false)}} key={x}>{x}</button>)}</div></div>
          <div className="planner-step"><label><span>3</span> 희망 목표</label><div className="select-wrap"><select value={goal} onChange={e=>{setGoal(e.target.value);setResult(false)}}><option>4년제 미대</option><option>예중·예고 진학</option><option>미술계열 전문대</option><option>아직 탐색 중</option></select><ChevronDown size={17}/></div></div>
          <button className="plan-button" onClick={()=>setResult(true)}>맞춤 로드맵 확인하기 <ArrowRight size={17}/></button>
          {result && <div className="result"><span>{school} · {grade} · {goal}</span><h3>{plan.headline}</h3><p>{plan.body}</p><ol>{plan.steps.map(x=><li key={x}>{x}</li>)}</ol><small>※ 기초 안내이며 실제 지원 전략은 학교별 최신 모집요강과 개인 실기 수준을 함께 확인해야 합니다.</small></div>}
        </div>
      </section>

      <section className="info section" id="info">
        <div className="section-head"><div><span className="kicker">ART ADMISSION</span><h2>복잡한 미술입시,<br/>쉽고 정확하게</h2></div><button className="text-btn">전체 정보 보기 <ArrowRight size={16}/></button></div>
        <div className="article-grid">{articles.map((a,i)=><article className="article" key={a.title}><div className="article-visual" style={{background:a.tone}}><span>{i===0?'✦':i===1?'△':'◯'}</span></div><div className="article-copy"><small>{a.tag}</small><h3>{a.title}</h3><p>{a.meta} · 그림티 진로 가이드</p><button>읽어보기 <ArrowRight size={14}/></button></div></article>)}</div>
        <div className="resources"><div><BookOpen/><span><b>대학별 전형 정보</b><small>수시·정시·실기 반영 비율</small></span></div><div><School/><span><b>예중·예고 가이드</b><small>학교 선택부터 준비 과정까지</small></span></div><div><Target/><span><b>미술학원 선택법</b><small>우리 아이에게 맞는 학원 찾기</small></span></div><div><Compass/><span><b>전공·직업 탐색</b><small>미술로 이어지는 다양한 진로</small></span></div></div>
      </section>

      <section className="about section" id="about"><div className="about-quote">“</div><div><span className="kicker">WHY GRIMTI</span><h2>공부와 그림을 함께 봐야<br/>진짜 입시 전략이 보입니다.</h2><p>수학·영어학원과 미술학원을 30년간 함께 운영하며 수많은 학생을 만났습니다. 그림티는 단순히 그림을 잘 그리는 법이 아니라, 한 아이의 성적과 성향, 가능성을 함께 살펴 가장 현실적인 길을 설계합니다.</p><strong>그림티 미술진로센터</strong><small>대표 진로 디렉터</small></div></section>

      <section className="faq section"><div><span className="kicker">FAQ</span><h2>자주 묻는 질문</h2></div><div>{['미술은 몇 살부터 시작하는 것이 좋은가요?','미술 소질은 어떻게 확인할 수 있나요?','성적이 낮아도 미대 진학이 가능한가요?'].map((q,i)=><div className="faq-item" key={q}><button onClick={()=>setOpenFaq(openFaq===i?-1:i)}><span>{q}</span><span>{openFaq===i?'−':'+'}</span></button>{openFaq===i&&<p>{i===0?'정해진 정답은 없습니다. 유아기에는 입시식 훈련보다 다양한 재료를 즐겁게 경험하는 것이 우선입니다.':i===1?'완성작 하나보다 관찰하는 태도, 반복해서 표현하려는 의지, 재료를 다루는 방식 등을 일정 기간 함께 살펴보는 것이 좋습니다.':'가능합니다. 다만 대학마다 학생부·수능·실기 반영 방식이 다르므로 실기 강점과 유리한 반영 과목을 기준으로 현실적인 지원군을 설계해야 합니다.'}</p>}</div>)}</div></section>
    </main>
    <footer><div className="brand footer-brand"><span className="brand-mark"><Palette size={18}/></span><span>그림티</span></div><p>아이의 가능성을 발견하고, 진로가 되는 길을 함께 그립니다.</p><small>© 2026 그림티 미술진로센터. All rights reserved.</small></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
