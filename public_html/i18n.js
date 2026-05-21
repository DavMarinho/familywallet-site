/**
 * i18n.js — Sistema de tradução compartilhado para todas as páginas.
 *
 * Uso no HTML:
 * <element data-i18n="path.to.key">Texto fallback PT</element>
 * <input data-i18n-placeholder="path.to.key" placeholder="Texto fallback PT">
 *
 * Detecção automática: navigator.language → fallback PT
 * Persistência: localStorage 'fw_lang'
 */

(function () {
  'use strict';

  const STRINGS = {
    pt: {
      meta: {
        title: 'Family Wallet — Controle financeiro familiar pelo WhatsApp',
        desc: 'Sua família, suas finanças. Registre gastos pelo WhatsApp e veja em tempo real onde o dinheiro está indo.',
      },
      nav: { howItWorks: 'Como funciona', pricing: 'Preços', cta: 'Entrar na lista', back: '← Voltar' },
      hero: {
        badge: '🇧🇷 Beta exclusivo — vagas limitadas',
        title: 'O fim das brigas financeiras na sua família',
        subBefore: 'Mande',
        subAfter: 'no WhatsApp. A IA categoriza, atualiza o saldo familiar e <strong>todo mundo vê na hora</strong>.',
        social1: '⭐ +200 pessoas na lista', social2: '🔒 LGPD compliant', social3: '🇧🇷 100% nacional',
      },
      mockup: { balance: 'Saldo Disponível Familiar', value: 'R$ 2.467,80', pct: '26.5% do limite mensal', registered: '✅ Registrado:' },
      cat: { food: 'Alimentação', transport: 'Transporte' },
      problem: {
        title: 'Você reconhece essas cenas?',
        sub: 'Nossa pesquisa mostrou que 73% das famílias brigam por gastos não combinados',
        p1Title: '"De novo estourou o cartão!"', p1Body: 'Final do mês descobre que cônjuge gastou R$ 800 em coisas "essenciais" que você nem sabia.',
        p2Title: '"Esqueci de anotar"', p2Body: 'Apps de finanças exigem 4 toques. No corre do dia, ninguém anota nada.',
        p3Title: '"Ele não vai usar app"', p3Body: 'Você até quer organizar, mas seu cônjuge nunca vai abrir um app de finanças. WhatsApp ele já tem aberto.',
      },
      how: {
        title: 'Como funciona', sub: '3 passos. 60 segundos pra começar.',
        s1Title: 'Conecte sua família', s1Body: 'Crie uma família no app, defina limites por categoria e convide quem faz parte.',
        s2Title: 'Cada um vincula o WhatsApp', s2Body: 'Um clique e o WhatsApp da pessoa vira o "registrador". Não precisa baixar nada extra.',
        s3Title: 'Mande gastos por mensagem', s3Body: '"Mercado 87" → IA categoriza, soma, atualiza saldo familiar e avisa todos se chegou perto do limite.',
      },
      feat: {
        aiTitle: 'IA que entende português brasileiro', aiBody: '"iFood", "uber", "padaria", "farmácia" — categoriza tudo certo e aprende os termos da sua família.',
        alertTitle: 'Alertas em tempo real', alertBody: 'Passou de 70%? Verde vira amarelo. Estourou? Todos os admins recebem aviso na hora. Acabaram as surpresas.',
        pdfTitle: 'Relatórios PDF mensais', pdfBody: 'Gráfico por categoria, top gastos, comparativo entre meses, projeção pra fechar o mês.',
        privTitle: 'Privacidade que você controla', privBody: 'Dados criptografados em AES-256. Não vendemos pra ninguém. Exporte ou apague tudo com 1 clique. LGPD compliant.',
      },
      price: {
        title: 'Preços simples', sub: 'Comece grátis. Faça upgrade quando precisar.',
        plan: 'Plano', free: 'Grátis', freeDesc: 'Pra famílias começando',
        free1: 'Até 3 membros na família', free2: '7 categorias com limites', free3: 'Bot WhatsApp ilimitado',
        free4: 'PDF mensal simples', free5: 'Sem relatórios avançados', free6: 'Suporte em até 5 dias úteis',
        startFree: 'Começar grátis', popular: '⭐ MAIS POPULAR',
        perMonthBeta: '/mês no beta', yearlyDesc: 'Ou R$ 149/ano (poupa R$ 30)',
        prem1: 'Membros ilimitados', prem2: 'Categorias ilimitadas', prem3: 'Bot WhatsApp ilimitado',
        prem4: 'Relatórios avançados (com IA)', prem5: 'Suporte prioritário em 24h', prem6: 'Sem anúncios',
        wantPrem: 'Quero o Premium', guarantee: 'Cancele quando quiser. 7 dias de garantia.',
      },
      faq: {
        title: 'Perguntas frequentes',
        q1: 'O bot do WhatsApp é seguro? Vocês veem minhas mensagens?', a1: 'Sim, é seguro. Só processamos mensagens enviadas para o número oficial do bot. Toda comunicação é criptografada (AES-256). Não vendemos dados.',
        q2: 'E se o WhatsApp banir o bot?', a2: 'Usamos a infraestrutura oficial do WhatsApp Business API. O app continua funcionando 100% pelo registro direto, mesmo sem o bot. Seus dados nunca somem.',
        q3: 'A IA acerta a categoria sempre?', a3: '~92% das vezes ela acerta de primeira. Quando erra, você corrige no app com 1 toque e a IA aprende com sua família.',
        q4: 'Funciona com banco/cartão automaticamente?', a4: 'Hoje não — você registra manualmente via WhatsApp (5 segundos). Open Finance previsto pro segundo semestre.',
        q5: 'Posso cancelar quando quiser?', a5: 'Sim, com 1 toque. Premium tem 7 dias de garantia. Você não perde dados ao voltar pro grátis.',
        q6: 'Quando lança? Beta é só convidado?', a6: 'Beta privado começa em <strong>maio/2026</strong>. Lançamento aberto previsto pra <strong>julho/2026</strong>.',
      },
      cta: {
        title: 'Pare de adivinhar pra onde foi o dinheiro',
        sub: 'Junte-se à lista de espera. 6 meses Premium de presente quando lançar.',
        btn: 'Quero entrar', note: 'Sem spam. Sem cartão. Só te avisamos quando estiver pronto.',
      },
      form: {
        emailPlaceholder: 'seu@email.com', cta: 'Quero meu beta grátis',
        note: '🎁 Beta testers ganham <strong>6 meses Premium grátis</strong>. Sem spam.',
        success: 'Obrigado! Você está na lista. Te avisamos quando lançar.',
        error: 'Erro ao cadastrar. Tente novamente em instantes.',
      },
      footer: { made: '© 2026 Family Wallet. Feito no Brasil 🇧🇷', privacy: 'Privacidade', terms: 'Termos', contact: 'Contato' },
    },

    en: {
      meta: { title: 'Family Wallet — Family finances via WhatsApp', desc: 'Your family, your finances. Track expenses on WhatsApp and see where the money goes in real time.' },
      nav: { howItWorks: 'How it works', pricing: 'Pricing', cta: 'Join waitlist', back: '← Back' },
      hero: {
        badge: '🌍 Exclusive beta — limited spots',
        title: 'End financial fights in your family',
        subBefore: 'Send',
        subAfter: 'on WhatsApp. AI categorizes, updates the family balance, and <strong>everyone sees it instantly</strong>.',
        social1: '⭐ 200+ people on waitlist', social2: '🔒 GDPR compliant', social3: '🇧🇷 Made in Brazil',
      },
      mockup: { balance: 'Available Family Balance', value: '$ 487.50', pct: '26.5% of monthly limit', registered: '✅ Registered:' },
      cat: { food: 'Food', transport: 'Transport' },
      problem: {
        title: 'Do you recognize these scenes?',
        sub: 'Our research shows 73% of families fight over unaligned spending',
        p1Title: '"You blew the credit card again!"', p1Body: 'End of month, you find out your spouse spent $200 on "essentials" you didn\'t even know about.',
        p2Title: '"I forgot to log it"', p2Body: 'Finance apps need 4 taps. In the rush of the day, no one logs anything.',
        p3Title: '"He won\'t use an app"', p3Body: 'You want to organize but your spouse will never open a finance app. WhatsApp is already open.',
      },
      how: {
        title: 'How it works', sub: '3 steps. 60 seconds to start.',
        s1Title: 'Connect your family', s1Body: 'Create a family in the app, set limits per category and invite members.',
        s2Title: 'Each member links WhatsApp', s2Body: 'One click and their WhatsApp becomes the logger. No extra download needed.',
        s3Title: 'Send expenses via message', s3Body: '"Groceries 87" → AI categorizes, sums, updates family balance and notifies everyone if near limit.',
      },
      feat: {
        aiTitle: 'AI that understands natural language', aiBody: '"Uber", "Starbucks", "pharmacy" — categorizes correctly and learns your family\'s terms.',
        alertTitle: 'Real-time alerts', alertBody: 'Past 70%? Green turns yellow. Over budget? All admins get notified instantly. No more surprises.',
        pdfTitle: 'Monthly PDF reports', pdfBody: 'Charts by category, top spending, month comparison, projection to close the month.',
        privTitle: 'Privacy you control', privBody: 'Data encrypted in AES-256. We never sell. Export or delete everything in 1 click.',
      },
      price: {
        title: 'Simple pricing', sub: 'Start free. Upgrade when you need.',
        plan: 'Plan', free: 'Free', freeDesc: 'For families getting started',
        free1: 'Up to 3 family members', free2: '7 categories with limits', free3: 'Unlimited WhatsApp bot',
        free4: 'Simple monthly PDF', free5: 'No advanced reports', free6: 'Support within 5 business days',
        startFree: 'Start free', popular: '⭐ MOST POPULAR',
        perMonthBeta: '/month in beta', yearlyDesc: 'Or $ 39/year (saves 20%)',
        prem1: 'Unlimited members', prem2: 'Unlimited categories', prem3: 'Unlimited WhatsApp bot',
        prem4: 'Advanced AI reports', prem5: 'Priority support in 24h', prem6: 'No ads',
        wantPrem: 'Get Premium', guarantee: 'Cancel anytime. 7-day money-back guarantee.',
      },
      faq: {
        title: 'Frequently asked questions',
        q1: 'Is the WhatsApp bot secure? Do you read my messages?', a1: 'Yes, it\'s secure. We only process messages sent to the official bot number. All communication is encrypted (AES-256). We never sell data.',
        q2: 'What if WhatsApp bans the bot?', a2: 'We use the official WhatsApp Business API. The app keeps working 100% via direct registration, even without the bot. Your data is never lost.',
        q3: 'Does the AI always categorize correctly?', a3: '~92% accuracy on first try. When wrong, fix it in 1 tap and the AI learns your family\'s terms.',
        q4: 'Does it auto-import bank/card transactions?', a4: 'Not today — you log manually via WhatsApp (5 seconds). Open Banking integration coming H2 2026.',
        q5: 'Can I cancel anytime?', a5: 'Yes, in 1 tap. Premium has a 7-day guarantee. You don\'t lose data when going back to free.',
        q6: 'When does it launch? Is beta invite-only?', a6: 'Private beta starts in <strong>May 2026</strong>. Public launch planned for <strong>July 2026</strong>.',
      },
      cta: {
        title: 'Stop guessing where the money went',
        sub: 'Join the waitlist. 6 months Premium free when we launch.',
        btn: 'I\'m in', note: 'No spam. No card. We\'ll only email when ready.',
      },
      form: {
        emailPlaceholder: 'your@email.com', cta: 'Get my free beta',
        note: '🎁 Beta testers get <strong>6 months Premium free</strong>. No spam.',
        success: 'Thanks! You\'re on the list. We\'ll email when we launch.',
        error: 'Failed to register. Please try again.',
      },
      footer: { made: '© 2026 Family Wallet. Made in Brazil 🇧🇷', privacy: 'Privacy', terms: 'Terms', contact: 'Contact' },
    },

    es: {
      meta: { title: 'Family Wallet — Finanzas familiares por WhatsApp', desc: 'Tu familia, tus finanzas. Registra gastos por WhatsApp y ve a dónde va el dinero en tiempo real.' },
      nav: { howItWorks: 'Cómo funciona', pricing: 'Precios', cta: 'Lista de espera', back: '← Volver' },
      hero: {
        badge: '🌎 Beta exclusiva — plazas limitadas',
        title: 'El fin de las peleas financieras en tu familia',
        subBefore: 'Envía',
        subAfter: 'por WhatsApp. La IA categoriza, actualiza el saldo familiar y <strong>todos lo ven al instante</strong>.',
        social1: '⭐ +200 personas en la lista', social2: '🔒 Cumplimiento GDPR', social3: '🇧🇷 Hecho en Brasil',
      },
      mockup: { balance: 'Saldo Familiar Disponible', value: '€ 467,80', pct: '26.5% del límite mensual', registered: '✅ Registrado:' },
      cat: { food: 'Alimentación', transport: 'Transporte' },
      problem: {
        title: '¿Reconoces estas escenas?',
        sub: 'Nuestro estudio muestra que el 73% de las familias discuten por gastos no acordados',
        p1Title: '"¡Otra vez te pasaste con la tarjeta!"', p1Body: 'A fin de mes descubres que tu pareja gastó € 200 en cosas "esenciales" que ni sabías.',
        p2Title: '"Olvidé anotarlo"', p2Body: 'Apps de finanzas piden 4 toques. En el ajetreo del día, nadie anota nada.',
        p3Title: '"Él no usará app"', p3Body: 'Quieres organizar pero tu pareja nunca abrirá una app de finanzas. WhatsApp ya lo tiene abierto.',
      },
      how: {
        title: 'Cómo funciona', sub: '3 pasos. 60 segundos para empezar.',
        s1Title: 'Conecta a tu familia', s1Body: 'Crea una familia en la app, define límites por categoría e invita a los miembros.',
        s2Title: 'Cada uno vincula su WhatsApp', s2Body: 'Un clic y el WhatsApp se convierte en registrador. Sin descargas extras.',
        s3Title: 'Envía gastos por mensaje', s3Body: '"Mercado 87" → la IA categoriza, suma, actualiza el saldo y avisa si llega al límite.',
      },
      feat: {
        aiTitle: 'IA que entiende lenguaje natural', aiBody: '"Uber", "Starbucks", "farmacia" — categoriza bien y aprende los términos de tu familia.',
        alertTitle: 'Alertas en tiempo real', alertBody: '¿Pasaste el 70%? Verde a amarillo. ¿Excediste? Todos los admins reciben aviso al instante.',
        pdfTitle: 'Informes PDF mensuales', pdfBody: 'Gráficos por categoría, top gastos, comparativa entre meses, proyección para cerrar el mes.',
        privTitle: 'Privacidad que tú controlas', privBody: 'Datos cifrados en AES-256. No vendemos nada. Exporta o borra todo con 1 clic.',
      },
      price: {
        title: 'Precios simples', sub: 'Empieza gratis. Mejora cuando lo necesites.',
        plan: 'Plan', free: 'Gratis', freeDesc: 'Para familias que empiezan',
        free1: 'Hasta 3 miembros', free2: '7 categorías con límites', free3: 'Bot WhatsApp ilimitado',
        free4: 'PDF mensual simple', free5: 'Sin informes avanzados', free6: 'Soporte hasta 5 días hábiles',
        startFree: 'Empezar gratis', popular: '⭐ MÁS POPULAR',
        perMonthBeta: '/mes en beta', yearlyDesc: 'O € 35/año (ahorra 20%)',
        prem1: 'Miembros ilimitados', prem2: 'Categorías ilimitadas', prem3: 'Bot WhatsApp ilimitado',
        prem4: 'Informes avanzados (con IA)', prem5: 'Soporte prioritario 24h', prem6: 'Sin anuncios',
        wantPrem: 'Quiero Premium', guarantee: 'Cancela cuando quieras. 7 días de garantía.',
      },
      faq: {
        title: 'Preguntas frecuentes',
        q1: '¿El bot de WhatsApp es seguro? ¿Leen mis mensajes?', a1: 'Sí, es seguro. Solo procesamos mensajes enviados al número oficial del bot. Toda comunicación está cifrada (AES-256). No vendemos datos.',
        q2: '¿Y si WhatsApp banea el bot?', a2: 'Usamos la API oficial de WhatsApp Business. La app sigue funcionando 100% por registro directo, incluso sin el bot.',
        q3: '¿La IA siempre acierta la categoría?', a3: '~92% de las veces acierta a la primera. Cuando falla, lo corriges en 1 toque y la IA aprende.',
        q4: '¿Funciona con banco/tarjeta automáticamente?', a4: 'Hoy no — registras manualmente por WhatsApp (5 segundos). Open Banking previsto para H2 2026.',
        q5: '¿Puedo cancelar cuando quiera?', a5: 'Sí, en 1 toque. Premium tiene 7 días de garantía. No pierdes datos al volver al gratis.',
        q6: '¿Cuándo lanza? ¿La beta es solo por invitación?', a6: 'Beta privada en <strong>mayo 2026</strong>. Lanzamiento abierto previsto para <strong>julio 2026</strong>.',
      },
      cta: {
        title: 'Deja de adivinar a dónde se fue el dinero',
        sub: 'Únete a la lista de espera. 6 meses Premium de regalo.',
        btn: 'Quiero entrar', note: 'Sin spam. Sin tarjeta. Te avisamos cuando esté listo.',
      },
      form: {
        emailPlaceholder: 'tu@email.com', cta: 'Quiero mi beta gratis',
        note: '🎁 Beta testers ganan <strong>6 meses Premium gratis</strong>. Sin spam.',
        success: '¡Gracias! Estás en la lista. Te avisamos cuando lancemos.',
        error: 'Error al registrar. Inténtalo de nuevo.',
      },
      footer: { made: '© 2026 Family Wallet. Hecho en Brasil 🇧🇷', privacy: 'Privacidad', terms: 'Términos', contact: 'Contacto' },
    },

    zh: {
      meta: { title: '家庭钱包 — 通过 WhatsApp 管理家庭财务', desc: '您的家庭，您的财务。通过 WhatsApp 记录支出，实时查看资金去向。' },
      nav: { howItWorks: '工作原理', pricing: '价格', cta: '加入等候名单', back: '← 返回' },
      hero: {
        badge: '🌏 独家测试 — 名额有限',
        title: '终结家庭财务争吵',
        subBefore: '在 WhatsApp 上发送',
        subAfter: '。AI 自动分类，更新家庭余额，<strong>所有人即时看到</strong>。',
        social1: '⭐ 200+ 人在等候名单', social2: '🔒 GDPR 合规', social3: '🇧🇷 巴西制造',
      },
      mockup: { balance: '家庭可用余额', value: '¥ 3,520.00', pct: '月度限额的 26.5%', registered: '✅ 已记录：' },
      cat: { food: '餐饮', transport: '交通' },
      problem: {
        title: '您是否经历过这些场景？',
        sub: '我们的研究显示，73% 的家庭因未协商的支出而争吵',
        p1Title: '"信用卡又超支了！"', p1Body: '月底发现配偶花了 ¥1500 在您不知道的"必需品"上。',
        p2Title: '"我忘记记录了"', p2Body: '财务应用需要点击 4 次。日常忙碌中，没人会记录。',
        p3Title: '"他不会用应用"', p3Body: '您想整理财务但配偶永远不会打开财务应用。WhatsApp 是他已经在用的。',
      },
      how: {
        title: '工作原理', sub: '3 个步骤。60 秒上手。',
        s1Title: '连接您的家庭', s1Body: '在应用中创建家庭，按类别设置限额，邀请成员加入。',
        s2Title: '每位成员关联 WhatsApp', s2Body: '一键完成，WhatsApp 即变为记录器。无需额外下载。',
        s3Title: '通过消息发送支出', s3Body: '"超市 87" → AI 分类、汇总、更新家庭余额，接近限额时通知所有人。',
      },
      feat: {
        aiTitle: '理解自然语言的 AI', aiBody: '"Uber"、"星巴克"、"药店" — 准确分类并学习您家庭的用语。',
        alertTitle: '实时提醒', alertBody: '超过 70%？绿色变黄。超支？所有管理员立即收到通知。再无意外。',
        pdfTitle: '月度 PDF 报告', pdfBody: '分类图表、最高支出、月度对比、月末预测。',
        privTitle: '您掌控的隐私', privBody: '数据采用 AES-256 加密。从不出售。一键导出或删除全部。',
      },
      price: {
        title: '简单定价', sub: '免费开始。需要时升级。',
        plan: '套餐', free: '免费', freeDesc: '适合刚开始的家庭',
        free1: '最多 3 名家庭成员', free2: '7 个带限额的类别', free3: '无限 WhatsApp 机器人',
        free4: '简单月度 PDF', free5: '无高级报告', free6: '支持响应最长 5 个工作日',
        startFree: '免费开始', popular: '⭐ 最受欢迎',
        perMonthBeta: '/月 (测试期)', yearlyDesc: '或 ¥ 280/年 (节省 20%)',
        prem1: '无限成员', prem2: '无限类别', prem3: '无限 WhatsApp 机器人',
        prem4: '高级 AI 报告', prem5: '24 小时优先支持', prem6: '无广告',
        wantPrem: '获取高级版', guarantee: '随时取消。7 天保证。',
      },
      faq: {
        title: '常见问题',
        q1: 'WhatsApp 机器人安全吗？你们能看到我的消息？', a1: '是的，安全。我们只处理发送给官方机器人号码的消息。所有通信均加密 (AES-256)。我们绝不出售数据。',
        q2: '如果 WhatsApp 封禁机器人怎么办？', a2: '我们使用 WhatsApp 官方 Business API。即使没有机器人，应用通过直接记录仍 100% 可用。',
        q3: 'AI 总是分类正确吗？', a3: '约 92% 首次准确。出错时一键纠正，AI 会学习您家庭的用语。',
        q4: '能自动从银行/卡导入吗？', a4: '目前不能 — 通过 WhatsApp 手动记录 (5 秒)。Open Banking 集成预计 2026 下半年。',
        q5: '可以随时取消吗？', a5: '可以，一键操作。高级版有 7 天保证。回到免费版不会丢失数据。',
        q6: '什么时候发布？测试是否仅限邀请？', a6: '私有测试 <strong>2026 年 5 月</strong>开始。公开发布预计 <strong>2026 年 7 月</strong>。',
      },
      cta: {
        title: '别再猜钱去哪了',
        sub: '加入等候名单。发布时赠送 6 个月高级版。',
        btn: '我加入', note: '无垃圾邮件。无需信用卡。准备就绪时通知您。',
      },
      form: {
        emailPlaceholder: '您的@邮箱.com', cta: '获取免费测试版',
        note: '🎁 测试用户获得 <strong>6 个月免费高级版</strong>。无垃圾邮件。',
        success: '感谢！您已在名单中。发布时通知您。',
        error: '注册失败。请重试。',
      },
      footer: { made: '© 2026 Family Wallet. 巴西制造 🇧🇷', privacy: '隐私', terms: '条款', contact: '联系' },
    },
  };

  const FLAGS = { pt: '🇧🇷 PT', en: '🇺🇸 EN', es: '🇪🇸 ES', zh: '🇨🇳 中' };

  function detectLang() {
    const saved = localStorage.getItem('fw_lang');
    if (saved && STRINGS[saved]) return saved;
    const browser = (navigator.language || 'pt').toLowerCase();
    if (browser.startsWith('en')) return 'en';
    if (browser.startsWith('es')) return 'es';
    if (browser.startsWith('zh')) return 'zh';
    return 'pt';
  }

  function getValue(lang, key) {
    const parts = key.split('.');
    let val = STRINGS[lang];
    for (const p of parts) {
      if (val == null) return null;
      val = val[p];
    }
    return val;
  }

  function applyLang(lang) {
    if (!STRINGS[lang]) lang = 'pt';
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : lang;

    // Substitui textContent
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = getValue(lang, key);
      if (val != null) {
        // Se contém HTML tag, usa innerHTML (cuidado com XSS — só strings de tradução estáticas)
        if (/<[a-z]/i.test(val)) {
          el.innerHTML = val;
        } else {
          // Preserva filhos <span>/<strong> existentes — substitui só primeiro text node
          if (el.children.length === 0) {
            el.textContent = val;
          } else {
            // Substitui apenas o primeiro nó de texto, mantém ícones
            const firstText = Array.from(el.childNodes).find(n => n.nodeType === 3);
            if (firstText) firstText.textContent = val;
            else el.textContent = val;
          }
        }
      }
    });

    // Substitui placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      const val = getValue(lang, key);
      if (val != null) el.setAttribute('placeholder', val);
    });

    // Substitui meta tags
    const titleEl = document.querySelector('title[data-i18n]');
    if (titleEl) {
      const key = titleEl.getAttribute('data-i18n');
      const val = getValue(lang, key);
      if (val) document.title = val;
    }

    const descEl = document.querySelector('meta[name="description"][data-i18n]');
    if (descEl) {
      const key = descEl.getAttribute('data-i18n');
      const val = getValue(lang, key);
      if (val) descEl.setAttribute('content', val);
    }

    // Atualiza switcher visual
    const cur = document.getElementById('lang-current');
    if (cur) cur.textContent = FLAGS[lang] || FLAGS.pt;

    localStorage.setItem('fw_lang', lang);
  }

  // API pública
  window.I18N = {
    setLang: applyLang,
    getLang: () => localStorage.getItem('fw_lang') || detectLang(),
    t: (key) => getValue(window.I18N.getLang(), key),
  };

  // Aplica no carregamento
  document.addEventListener('DOMContentLoaded', () => {
    applyLang(detectLang());
  });
})();
