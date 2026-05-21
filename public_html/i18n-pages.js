/**
 * i18n-pages.js — Renderiza Política de Privacidade e Termos em 4 idiomas.
 * Apenas referência simplificada — para produção, revisão jurídica obrigatória.
 */

(function () {
  'use strict';

  const PRIVACY = {
    pt: `
      <p class="text-lg leading-relaxed mb-8">A Family Wallet ("nós") respeita sua privacidade e protege seus dados conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018).</p>
      <p><strong>Controlador:</strong> [Razão Social — preencher]<br><strong>CNPJ:</strong> [XX.XXX.XXX/0001-XX]<br><strong>DPO:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></p>

      <h2>1. Dados que coletamos</h2>
      <h3>1.1 Cadastro e uso</h3>
      <ul>
        <li>Nome, e-mail, senha (criptografada), telefone (opcional, para WhatsApp)</li>
        <li>Login social: Google ou Apple → recebemos nome, e-mail e foto</li>
        <li>Dados financeiros: categorias, limites, descrições e valores que você registra</li>
        <li>Pagamento: processado pelo Mercado Pago — recebemos só confirmação</li>
      </ul>

      <h3>1.2 Coletados automaticamente</h3>
      <ul><li>IP, dispositivo, sistema operacional, idioma</li><li>Logs de acesso e ações</li></ul>

      <h3>1.3 NÃO coletamos</h3>
      <ul>
        <li>Mensagens pessoais do WhatsApp — apenas as enviadas ao bot</li>
        <li>Localização, agenda, fotos ou outros apps</li>
        <li>Trackers publicitários</li>
      </ul>

      <h2>2. Como usamos</h2>
      <ul>
        <li>Operar o serviço (registrar transações, calcular saldos)</li>
        <li>Categorizar gastos com IA</li>
        <li>Processar pagamentos Premium</li>
        <li>Enviar comunicações operacionais</li>
        <li>Melhorar o produto (análises agregadas)</li>
        <li>Cumprir obrigações legais</li>
      </ul>
      <p><strong>Nunca</strong> vendemos seus dados. <strong>Nunca</strong> usamos para publicidade direcionada.</p>

      <h2>3. Bases legais (LGPD Art. 7º)</h2>
      <ul>
        <li><strong>Execução do contrato:</strong> dados para fornecer o serviço</li>
        <li><strong>Consentimento:</strong> notificações, vinculação WhatsApp</li>
        <li><strong>Legítimo interesse:</strong> segurança, prevenção a fraudes</li>
        <li><strong>Obrigação legal:</strong> dados fiscais e auditoria</li>
      </ul>

      <h2>4. Compartilhamento com terceiros</h2>
      <ul>
        <li><strong>Railway/Render:</strong> hospedagem (EUA)</li>
        <li><strong>Cloudflare:</strong> proteção (global)</li>
        <li><strong>Mercado Pago:</strong> pagamentos (Brasil)</li>
        <li><strong>Google Gemini API:</strong> categorização IA — só descrição, sem identificação</li>
        <li><strong>WhatsApp Business API:</strong> envio de mensagens</li>
        <li><strong>Sentry:</strong> monitoramento de erros (PII anonimizada)</li>
      </ul>
      <p>Transferência internacional: contratos com SCCs e provedores certificados (SOC 2, ISO 27001).</p>

      <h2>5. Seus direitos (LGPD Art. 18)</h2>
      <ul>
        <li><strong>Acesso, correção, portabilidade, exclusão</strong> — tudo no app: Ajustes → Privacidade</li>
        <li><strong>Revogação de consentimento</strong> a qualquer momento</li>
        <li><strong>Reclamação à ANPD:</strong> <a href="https://www.gov.br/anpd/" target="_blank" rel="noopener">gov.br/anpd</a></li>
      </ul>
      <p>Para exercer: <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a> — resposta em 15 dias úteis.</p>

      <h2>6. Segurança</h2>
      <ul>
        <li>HTTPS/TLS 1.3</li>
        <li>Senhas com bcrypt (custo 12)</li>
        <li>Descrições criptografadas em AES-256-GCM</li>
        <li>Isolamento por família</li>
        <li>2FA opcional</li>
        <li>Auditoria com logs imutáveis</li>
      </ul>
      <p>Em caso de incidente: notificação à ANPD em 72h e aos titulares afetados.</p>

      <h2>7. Retenção</h2>
      <ul>
        <li>Conta ativa: enquanto você usar</li>
        <li>Após exclusão: 30 dias para recuperação</li>
        <li>Hard delete: 30 dias após soft delete</li>
        <li>Backups: 90 dias após hard delete</li>
        <li>Logs de auditoria: 5 anos (obrigação legal)</li>
        <li>Dados fiscais: 5 anos (CTN art. 173)</li>
      </ul>

      <h2>8. Cookies</h2>
      <p>Apenas essenciais: sessão, refresh token, preferências (idioma, tema). <strong>Não usamos</strong> Google Analytics nem Facebook Pixel.</p>

      <h2>9. Crianças e adolescentes</h2>
      <p>Destinado a maiores de 18. Menores podem ser cadastrados como dependentes pelo responsável legal.</p>

      <h2>10. Alterações</h2>
      <p>Mudanças significativas são notificadas com 30 dias de antecedência por e-mail e no app.</p>

      <h2>11. Contato</h2>
      <ul>
        <li><strong>DPO:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
        <li><strong>Suporte:</strong> <a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
        <li><strong>ANPD:</strong> <a href="https://www.gov.br/anpd/" target="_blank" rel="noopener">gov.br/anpd</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ Modelo elaborado conforme LGPD e GDPR. <strong>Revisão jurídica recomendada antes da publicação.</strong></p>
    `,

    en: `
      <p class="text-lg leading-relaxed mb-8">Family Wallet ("we") respects your privacy and protects your data per Brazil's General Data Protection Law (LGPD, Law 13.709/2018) and GDPR principles.</p>
      <p><strong>Controller:</strong> [Legal Name — fill in]<br><strong>Brazilian Tax ID:</strong> [XX.XXX.XXX/0001-XX]<br><strong>DPO:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></p>

      <h2>1. Data we collect</h2>
      <h3>1.1 You provide directly</h3>
      <ul>
        <li>Name, email, hashed password, phone (optional, for WhatsApp)</li>
        <li>Social login: Google or Apple → name, email, profile photo</li>
        <li>Financial data: categories, limits, descriptions and amounts you register</li>
        <li>Payment: processed by Mercado Pago — we receive only confirmation</li>
      </ul>

      <h3>1.2 Collected automatically</h3>
      <ul><li>IP, device, OS, language</li><li>Access and action logs</li></ul>

      <h3>1.3 We do NOT collect</h3>
      <ul>
        <li>Personal WhatsApp messages — only those sent to the bot</li>
        <li>Location, calendar, photos or other apps</li>
        <li>Advertising trackers</li>
      </ul>

      <h2>2. How we use it</h2>
      <ul>
        <li>Operate the service (register transactions, compute balances)</li>
        <li>AI-powered expense categorization</li>
        <li>Process Premium payments</li>
        <li>Operational communications</li>
        <li>Product improvement (aggregated analytics)</li>
        <li>Comply with legal obligations</li>
      </ul>
      <p>We <strong>never</strong> sell your data. We <strong>never</strong> use it for targeted advertising.</p>

      <h2>3. Legal basis</h2>
      <ul>
        <li><strong>Contract performance:</strong> data needed to provide service</li>
        <li><strong>Consent:</strong> notifications, WhatsApp linking</li>
        <li><strong>Legitimate interest:</strong> security, fraud prevention</li>
        <li><strong>Legal obligation:</strong> tax records and audit</li>
      </ul>

      <h2>4. Third parties</h2>
      <ul>
        <li><strong>Railway/Render:</strong> hosting (USA)</li>
        <li><strong>Cloudflare:</strong> protection (global)</li>
        <li><strong>Mercado Pago:</strong> payments (Brazil)</li>
        <li><strong>Google Gemini API:</strong> AI categorization — only description, no user ID</li>
        <li><strong>WhatsApp Business API:</strong> messaging</li>
        <li><strong>Sentry:</strong> error monitoring (anonymized PII)</li>
      </ul>
      <p>International transfers: SCCs and certified providers (SOC 2, ISO 27001).</p>

      <h2>5. Your rights</h2>
      <ul>
        <li><strong>Access, rectification, portability, erasure</strong> — all in-app: Settings → Privacy</li>
        <li><strong>Withdraw consent</strong> anytime</li>
        <li><strong>Complaint to data authority:</strong> Brazilian ANPD or your local DPA</li>
      </ul>
      <p>Contact: <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a> — response within 15 business days.</p>

      <h2>6. Security</h2>
      <ul>
        <li>HTTPS/TLS 1.3</li>
        <li>Passwords with bcrypt (cost 12)</li>
        <li>Descriptions encrypted with AES-256-GCM</li>
        <li>Family isolation (RLS)</li>
        <li>Optional 2FA</li>
        <li>Immutable audit logs</li>
      </ul>
      <p>Incident notification: data authority within 72h and affected users.</p>

      <h2>7. Retention</h2>
      <ul>
        <li>Active account: while you use it</li>
        <li>After deletion: 30 days for recovery</li>
        <li>Hard delete: 30 days after soft delete</li>
        <li>Backups: 90 days after hard delete</li>
        <li>Audit logs: 5 years (legal obligation)</li>
      </ul>

      <h2>8. Cookies</h2>
      <p>Only essential: session, refresh token, preferences. No Google Analytics, no Facebook Pixel.</p>

      <h2>9. Children</h2>
      <p>For users 18+. Minors may be registered as dependents by legal guardians.</p>

      <h2>10. Changes</h2>
      <p>Significant changes notified 30 days in advance by email and in-app.</p>

      <h2>11. Contact</h2>
      <ul>
        <li><strong>DPO:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
        <li><strong>Support:</strong> <a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ Template based on LGPD and GDPR. <strong>Legal review recommended before production.</strong></p>
    `,

    es: `
      <p class="text-lg leading-relaxed mb-8">Family Wallet ("nosotros") respeta tu privacidad y protege tus datos conforme a la Ley General de Protección de Datos de Brasil (LGPD, Ley 13.709/2018) y principios del GDPR.</p>
      <p><strong>Responsable:</strong> [Razón Social — completar]<br><strong>CNPJ:</strong> [XX.XXX.XXX/0001-XX]<br><strong>DPO:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></p>

      <h2>1. Datos que recopilamos</h2>
      <h3>1.1 Que tú proporcionas</h3>
      <ul>
        <li>Nombre, email, contraseña cifrada, teléfono (opcional, para WhatsApp)</li>
        <li>Login social: Google o Apple → nombre, email, foto</li>
        <li>Datos financieros: categorías, límites, descripciones y montos que registras</li>
        <li>Pago: procesado por Mercado Pago — solo recibimos confirmación</li>
      </ul>

      <h3>1.2 Recopilados automáticamente</h3>
      <ul><li>IP, dispositivo, SO, idioma</li><li>Logs de acceso y acciones</li></ul>

      <h3>1.3 NO recopilamos</h3>
      <ul>
        <li>Mensajes personales de WhatsApp — solo los enviados al bot</li>
        <li>Ubicación, agenda, fotos u otras apps</li>
        <li>Rastreadores publicitarios</li>
      </ul>

      <h2>2. Cómo los usamos</h2>
      <ul>
        <li>Operar el servicio (registrar transacciones, calcular saldos)</li>
        <li>Categorización con IA</li>
        <li>Procesar pagos Premium</li>
        <li>Comunicaciones operativas</li>
        <li>Mejorar el producto (análisis agregados)</li>
        <li>Cumplir obligaciones legales</li>
      </ul>
      <p><strong>Nunca</strong> vendemos tus datos. <strong>Nunca</strong> los usamos para publicidad dirigida.</p>

      <h2>3. Bases legales</h2>
      <ul>
        <li><strong>Ejecución del contrato</strong></li>
        <li><strong>Consentimiento:</strong> notificaciones, vinculación WhatsApp</li>
        <li><strong>Interés legítimo:</strong> seguridad, prevención de fraude</li>
        <li><strong>Obligación legal:</strong> registros fiscales y auditoría</li>
      </ul>

      <h2>4. Terceros</h2>
      <ul>
        <li><strong>Railway/Render:</strong> alojamiento (EE.UU.)</li>
        <li><strong>Cloudflare:</strong> protección (global)</li>
        <li><strong>Mercado Pago:</strong> pagos (Brasil)</li>
        <li><strong>Google Gemini API:</strong> categorización IA — solo descripción, sin ID</li>
        <li><strong>WhatsApp Business API:</strong> mensajería</li>
        <li><strong>Sentry:</strong> monitoreo de errores (PII anonimizada)</li>
      </ul>

      <h2>5. Tus derechos</h2>
      <ul>
        <li><strong>Acceso, rectificación, portabilidad, eliminación</strong> — en la app: Ajustes → Privacidad</li>
        <li><strong>Retirar consentimiento</strong> en cualquier momento</li>
      </ul>
      <p>Contacto: <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a> — respuesta en 15 días hábiles.</p>

      <h2>6. Seguridad</h2>
      <ul>
        <li>HTTPS/TLS 1.3, bcrypt para contraseñas, AES-256-GCM para descripciones</li>
        <li>Aislamiento por familia, 2FA opcional, logs inmutables</li>
      </ul>
      <p>Notificación de incidente: autoridad de datos en 72h y usuarios afectados.</p>

      <h2>7. Retención</h2>
      <ul>
        <li>Cuenta activa: mientras la uses</li>
        <li>Tras eliminación: 30 días para recuperación, luego eliminación definitiva</li>
        <li>Logs auditoría: 5 años (obligación legal)</li>
      </ul>

      <h2>8. Cookies</h2>
      <p>Solo esenciales. Sin Google Analytics ni Facebook Pixel.</p>

      <h2>9. Menores</h2>
      <p>Para mayores de 18. Menores pueden registrarse como dependientes mediante el responsable legal.</p>

      <h2>10. Cambios</h2>
      <p>Cambios significativos se notifican con 30 días de antelación.</p>

      <h2>11. Contacto</h2>
      <ul>
        <li><strong>DPO:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
        <li><strong>Soporte:</strong> <a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ Modelo basado en LGPD y GDPR. <strong>Revisión legal recomendada antes de producción.</strong></p>
    `,

    zh: `
      <p class="text-lg leading-relaxed mb-8">Family Wallet（"我们"）尊重您的隐私，根据巴西《通用数据保护法》(LGPD, 第 13.709/2018 号法律) 和 GDPR 原则保护您的数据。</p>
      <p><strong>控制方：</strong>[法人名称 — 待填写]<br><strong>CNPJ：</strong>[XX.XXX.XXX/0001-XX]<br><strong>DPO：</strong><a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></p>

      <h2>1. 我们收集的数据</h2>
      <h3>1.1 您直接提供的</h3>
      <ul>
        <li>姓名、邮箱、加密密码、电话（可选，用于 WhatsApp）</li>
        <li>社交登录：Google 或 Apple → 姓名、邮箱、头像</li>
        <li>财务数据：您记录的类别、限额、描述和金额</li>
        <li>付款：由 Mercado Pago 处理 — 我们只收到确认</li>
      </ul>

      <h3>1.2 自动收集</h3>
      <ul><li>IP、设备、操作系统、语言</li><li>访问和操作日志</li></ul>

      <h3>1.3 我们不收集</h3>
      <ul>
        <li>WhatsApp 个人消息 — 仅发送给机器人的消息</li>
        <li>位置、日历、照片或其他应用</li>
        <li>广告跟踪器</li>
      </ul>

      <h2>2. 我们如何使用</h2>
      <ul>
        <li>运营服务（记录交易、计算余额）</li>
        <li>AI 支出分类</li>
        <li>处理高级版付款</li>
        <li>运营沟通</li>
        <li>产品改进（聚合分析）</li>
        <li>遵守法律义务</li>
      </ul>
      <p>我们<strong>从不</strong>出售您的数据。<strong>从不</strong>用于定向广告。</p>

      <h2>3. 法律依据</h2>
      <ul>
        <li><strong>合同履行</strong></li>
        <li><strong>同意：</strong>通知、WhatsApp 绑定</li>
        <li><strong>合法利益：</strong>安全、防欺诈</li>
        <li><strong>法律义务：</strong>税务记录和审计</li>
      </ul>

      <h2>4. 第三方</h2>
      <ul>
        <li><strong>Railway/Render：</strong>托管（美国）</li>
        <li><strong>Cloudflare：</strong>防护（全球）</li>
        <li><strong>Mercado Pago：</strong>支付（巴西）</li>
        <li><strong>Google Gemini API：</strong>AI 分类 — 仅描述，无标识</li>
        <li><strong>WhatsApp Business API：</strong>消息</li>
        <li><strong>Sentry：</strong>错误监控（匿名化 PII）</li>
      </ul>

      <h2>5. 您的权利</h2>
      <ul>
        <li><strong>访问、更正、可携带性、删除</strong> — 应用内：设置 → 隐私</li>
        <li><strong>随时撤回同意</strong></li>
      </ul>
      <p>联系：<a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a> — 15 个工作日内回复。</p>

      <h2>6. 安全</h2>
      <ul>
        <li>HTTPS/TLS 1.3、bcrypt 密码、AES-256-GCM 加密</li>
        <li>家庭隔离、可选 2FA、不可变审计日志</li>
      </ul>

      <h2>7. 保留期</h2>
      <ul>
        <li>活跃账户：使用期间</li>
        <li>删除后：30 天恢复期</li>
        <li>审计日志：5 年（法律义务）</li>
      </ul>

      <h2>8. Cookie</h2>
      <p>仅必要 Cookie。无 Google Analytics，无 Facebook Pixel。</p>

      <h2>9. 未成年人</h2>
      <p>仅限 18 岁以上用户。未成年人可由法定监护人注册为受抚养人。</p>

      <h2>10. 变更</h2>
      <p>重大变更将提前 30 天通过邮件和应用内通知。</p>

      <h2>11. 联系</h2>
      <ul>
        <li><strong>DPO：</strong><a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
        <li><strong>支持：</strong><a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ 基于 LGPD 和 GDPR 的模板。<strong>生产前建议法律审查。</strong></p>
    `,
  };

  const TERMS = {
    pt: `
      <p class="text-lg leading-relaxed mb-8">Bem-vindo ao Family Wallet. Ao criar uma conta ou usar nosso serviço, você concorda com estes Termos.</p>

      <h2>1. Aceitação</h2>
      <ul>
        <li>Você tem pelo menos 18 anos completos</li>
        <li>Leu e concorda com estes Termos e a <a href="/privacidade.html">Política de Privacidade</a></li>
        <li>As informações fornecidas são verdadeiras</li>
      </ul>

      <h2>2. Descrição do serviço</h2>
      <p>O Family Wallet é uma <strong>ferramenta de organização financeira familiar</strong>, não conselheiro financeiro. Não fazemos recomendações de investimento, crédito ou planejamento financeiro.</p>

      <h2>3. Conta de usuário</h2>
      <ul>
        <li>Você é responsável pela confidencialidade da senha</li>
        <li>Recomendamos ativar 2FA</li>
        <li>Não compartilhe credenciais</li>
      </ul>

      <h2>4. Uso permitido</h2>
      <p>É proibido:</p>
      <ul>
        <li>Acessar contas de terceiros sem autorização</li>
        <li>Engenharia reversa do app, código ou APIs</li>
        <li>Usar bots para sobrecarregar sistemas</li>
        <li>Registrar transações falsas</li>
        <li>Revender ou compartilhar acesso</li>
        <li>Atividades ilegais ou que violem direitos</li>
      </ul>
      <p>Violações resultam em suspensão sem reembolso.</p>

      <h2>5. Planos</h2>
      <h3>Gratuito</h3>
      <ul><li>3 membros, 7 categorias, bot WhatsApp ilimitado, PDF mensal básico</li></ul>
      <h3>Premium</h3>
      <ul><li>Mensal R$ 19,90 ou anual R$ 189,90 (20% off)</li><li>Membros e categorias ilimitados, relatórios avançados, suporte 24h</li></ul>
      <p>Pagamento via Mercado Pago. Renovação automática até cancelamento.</p>

      <h2>6. Cancelamento e reembolso</h2>
      <ul>
        <li><strong>Cancelar:</strong> Ajustes → Premium → Gerenciar</li>
        <li><strong>CDC Art. 49:</strong> reembolso integral em até 7 dias</li>
        <li>Após 7 dias: sem reembolso pró-rata, salvo indisponibilidade ≥72h ou cobrança duplicada</li>
      </ul>

      <h2>7. Conteúdo do usuário</h2>
      <p>Suas transações pertencem a <strong>você</strong>. Você nos concede licença mínima para armazenar, processar, exibir e categorizar via IA (Google Gemini, sem identificação).</p>

      <h2>8. Bot do WhatsApp</h2>
      <p><strong>Atenção:</strong></p>
      <ul>
        <li>Serviço auxiliar, não endossado pela Meta</li>
        <li>Sujeito a indisponibilidade conforme políticas do WhatsApp</li>
        <li>IA pode categorizar errado — revisão é responsabilidade do usuário</li>
      </ul>

      <h2>9. Limitação de responsabilidade</h2>
      <p>Fornecido <strong>"como está"</strong>. Não nos responsabilizamos por:</p>
      <ul>
        <li>Decisões financeiras baseadas no app</li>
        <li>Erros de categorização IA</li>
        <li>Indisponibilidade temporária</li>
        <li>Ações de outros membros da família</li>
        <li>Falhas de provedores terceiros</li>
      </ul>
      <p>Responsabilidade limitada ao valor pago nos últimos 12 meses.</p>

      <h2>10. Propriedade intelectual</h2>
      <p>Nome, logo, design e código são nossos. Proibido copiar, modificar, distribuir ou fazer engenharia reversa.</p>

      <h2>11. Modificações</h2>
      <p>Mudanças significativas notificadas com 30 dias de antecedência.</p>

      <h2>12. Encerramento</h2>
      <p>Você pode encerrar a qualquer momento. Podemos encerrar contas que violem estes Termos, com notificação prévia.</p>

      <h2>13. Lei aplicável</h2>
      <p>Regido pelas leis do Brasil (CDC, LGPD, Marco Civil). Foro de São Paulo/SP, salvo direito do consumidor pessoa física ao foro do seu domicílio.</p>

      <h2>14. Contato</h2>
      <ul>
        <li><strong>Suporte:</strong> <a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
        <li><strong>Privacidade:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
        <li><strong>Empresa:</strong> [Razão Social — preencher]</li>
        <li><strong>CNPJ:</strong> [XX.XXX.XXX/0001-XX]</li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ Modelo. <strong>Revisão por advogado especializado em direito digital recomendada antes da publicação.</strong></p>
    `,

    en: `
      <p class="text-lg leading-relaxed mb-8">Welcome to Family Wallet. By creating an account or using our service, you agree to these Terms.</p>

      <h2>1. Acceptance</h2>
      <ul>
        <li>You are at least 18 years old</li>
        <li>You have read and agree to these Terms and the <a href="/privacidade.html">Privacy Policy</a></li>
        <li>Information provided is truthful</li>
      </ul>

      <h2>2. Service description</h2>
      <p>Family Wallet is a <strong>family financial organization tool</strong>, not a financial advisor. We do not recommend investments, credit, or financial planning.</p>

      <h2>3. User account</h2>
      <ul>
        <li>You are responsible for password confidentiality</li>
        <li>We recommend enabling 2FA</li>
        <li>Do not share credentials</li>
      </ul>

      <h2>4. Permitted use</h2>
      <p>Prohibited:</p>
      <ul>
        <li>Accessing third-party accounts without authorization</li>
        <li>Reverse engineering app, code, or APIs</li>
        <li>Using bots to overload systems</li>
        <li>Registering fake transactions</li>
        <li>Reselling or sharing access</li>
        <li>Illegal activities or rights violations</li>
      </ul>
      <p>Violations result in suspension without refund.</p>

      <h2>5. Plans</h2>
      <h3>Free</h3>
      <ul><li>3 members, 7 categories, unlimited WhatsApp bot, basic monthly PDF</li></ul>
      <h3>Premium</h3>
      <ul><li>Monthly $9.90 or yearly $94.90 (20% off) — pricing varies by region</li><li>Unlimited members & categories, advanced reports, 24h support</li></ul>
      <p>Payment via Mercado Pago. Auto-renewal until cancellation.</p>

      <h2>6. Cancellation and refund</h2>
      <ul>
        <li><strong>Cancel:</strong> Settings → Premium → Manage</li>
        <li><strong>7-day refund:</strong> full refund within 7 days</li>
        <li>After 7 days: no pro-rata refund, except for service unavailability ≥72h or duplicate charges</li>
      </ul>

      <h2>7. User content</h2>
      <p>Your transactions belong to <strong>you</strong>. You grant us a minimal license to store, process, display, and categorize via AI (Google Gemini, anonymized).</p>

      <h2>8. WhatsApp Bot</h2>
      <ul>
        <li>Auxiliary service, not endorsed by Meta</li>
        <li>Subject to availability per WhatsApp policies</li>
        <li>AI may miscategorize — review is the user's responsibility</li>
      </ul>

      <h2>9. Limitation of liability</h2>
      <p>Provided <strong>"as is"</strong>. We are not responsible for:</p>
      <ul>
        <li>Financial decisions based on the app</li>
        <li>AI categorization errors</li>
        <li>Temporary unavailability</li>
        <li>Actions of other family members</li>
        <li>Third-party provider failures</li>
      </ul>
      <p>Liability limited to the amount paid in the last 12 months.</p>

      <h2>10. Intellectual property</h2>
      <p>Name, logo, design, and code are ours. Copying, modifying, distributing, or reverse engineering is prohibited.</p>

      <h2>11. Modifications</h2>
      <p>Significant changes notified 30 days in advance.</p>

      <h2>12. Termination</h2>
      <p>You may terminate anytime. We may terminate accounts violating these Terms with prior notice.</p>

      <h2>13. Governing law</h2>
      <p>Governed by Brazilian law. Venue: São Paulo/SP, except for consumer rights to local venue.</p>

      <h2>14. Contact</h2>
      <ul>
        <li><strong>Support:</strong> <a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
        <li><strong>Privacy:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ Template. <strong>Legal review recommended before production.</strong></p>
    `,

    es: `
      <p class="text-lg leading-relaxed mb-8">Bienvenido a Family Wallet. Al crear una cuenta o usar nuestro servicio, aceptas estos Términos.</p>

      <h2>1. Aceptación</h2>
      <ul>
        <li>Tienes al menos 18 años</li>
        <li>Has leído y aceptas estos Términos y la <a href="/privacidade.html">Política de Privacidad</a></li>
        <li>La información proporcionada es verídica</li>
      </ul>

      <h2>2. Descripción del servicio</h2>
      <p>Family Wallet es una <strong>herramienta de organización financiera familiar</strong>, no asesor financiero. No recomendamos inversiones, crédito ni planificación.</p>

      <h2>3. Cuenta de usuario</h2>
      <ul>
        <li>Eres responsable de la confidencialidad de la contraseña</li>
        <li>Recomendamos activar 2FA</li>
        <li>No compartas credenciales</li>
      </ul>

      <h2>4. Uso permitido</h2>
      <p>Prohibido:</p>
      <ul>
        <li>Acceder a cuentas ajenas sin autorización</li>
        <li>Ingeniería inversa</li>
        <li>Usar bots para sobrecargar sistemas</li>
        <li>Registrar transacciones falsas</li>
        <li>Revender o compartir acceso</li>
        <li>Actividades ilegales</li>
      </ul>
      <p>Las violaciones resultan en suspensión sin reembolso.</p>

      <h2>5. Planes</h2>
      <h3>Gratis</h3>
      <ul><li>3 miembros, 7 categorías, bot WhatsApp ilimitado, PDF mensual básico</li></ul>
      <h3>Premium</h3>
      <ul><li>Mensual € 8,90 o anual € 84,90 (20% off) — precios varían por región</li><li>Miembros y categorías ilimitados, informes avanzados, soporte 24h</li></ul>

      <h2>6. Cancelación y reembolso</h2>
      <ul>
        <li><strong>Cancelar:</strong> Ajustes → Premium → Gestionar</li>
        <li><strong>Garantía 7 días:</strong> reembolso íntegro</li>
        <li>Tras 7 días: sin reembolso prorrateado, salvo indisponibilidad ≥72h</li>
      </ul>

      <h2>7. Contenido del usuario</h2>
      <p>Tus transacciones son <strong>tuyas</strong>. Nos otorgas licencia mínima para almacenar, procesar, mostrar y categorizar vía IA.</p>

      <h2>8. Bot de WhatsApp</h2>
      <ul>
        <li>Servicio auxiliar, no respaldado por Meta</li>
        <li>Sujeto a disponibilidad según políticas de WhatsApp</li>
        <li>La IA puede equivocarse — revisión es responsabilidad del usuario</li>
      </ul>

      <h2>9. Limitación de responsabilidad</h2>
      <p>Proporcionado <strong>"tal cual"</strong>. No nos responsabilizamos por decisiones financieras, errores de IA, indisponibilidad temporal, acciones de otros miembros, o fallos de terceros.</p>

      <h2>10. Propiedad intelectual</h2>
      <p>Nombre, logo, diseño y código son nuestros.</p>

      <h2>11. Modificaciones</h2>
      <p>Cambios significativos notificados con 30 días de antelación.</p>

      <h2>12. Terminación</h2>
      <p>Puedes terminar en cualquier momento. Podemos terminar cuentas que violen estos Términos.</p>

      <h2>13. Ley aplicable</h2>
      <p>Regido por la ley brasileña. Jurisdicción: São Paulo/SP.</p>

      <h2>14. Contacto</h2>
      <ul>
        <li><strong>Soporte:</strong> <a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
        <li><strong>Privacidad:</strong> <a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ Modelo. <strong>Revisión legal recomendada antes de producción.</strong></p>
    `,

    zh: `
      <p class="text-lg leading-relaxed mb-8">欢迎使用 Family Wallet。创建账户或使用我们的服务即表示您同意这些条款。</p>

      <h2>1. 接受条款</h2>
      <ul>
        <li>您年满 18 周岁</li>
        <li>您已阅读并同意这些条款和<a href="/privacidade.html">隐私政策</a></li>
        <li>提供的信息真实</li>
      </ul>

      <h2>2. 服务说明</h2>
      <p>Family Wallet 是<strong>家庭财务整理工具</strong>，非财务顾问。我们不提供投资、信贷或财务规划建议。</p>

      <h2>3. 用户账户</h2>
      <ul>
        <li>您负责密码的保密性</li>
        <li>建议启用 2FA</li>
        <li>不要共享凭据</li>
      </ul>

      <h2>4. 允许的使用</h2>
      <p>禁止：</p>
      <ul>
        <li>未经授权访问第三方账户</li>
        <li>对应用、代码或 API 进行逆向工程</li>
        <li>使用机器人使系统过载</li>
        <li>注册虚假交易</li>
        <li>转售或共享访问权限</li>
        <li>非法活动</li>
      </ul>
      <p>违规将导致暂停且不退款。</p>

      <h2>5. 套餐</h2>
      <h3>免费</h3>
      <ul><li>3 名成员、7 个类别、无限 WhatsApp 机器人、基本月度 PDF</li></ul>
      <h3>高级版</h3>
      <ul><li>月付 ¥58 或年付 ¥558（节省 20%）— 价格因地区而异</li><li>无限成员和类别、高级报告、24 小时支持</li></ul>

      <h2>6. 取消和退款</h2>
      <ul>
        <li><strong>取消：</strong>设置 → 高级版 → 管理</li>
        <li><strong>7 天保证：</strong>全额退款</li>
        <li>7 天后：除非服务不可用 ≥72 小时或重复扣费，否则不按比例退款</li>
      </ul>

      <h2>7. 用户内容</h2>
      <p>您的交易归<strong>您</strong>所有。您授予我们最小许可，用于存储、处理、显示和通过 AI（Google Gemini，匿名化）分类。</p>

      <h2>8. WhatsApp 机器人</h2>
      <ul>
        <li>辅助服务，未获 Meta 认可</li>
        <li>受 WhatsApp 政策可用性影响</li>
        <li>AI 可能分类错误 — 审核由用户负责</li>
      </ul>

      <h2>9. 责任限制</h2>
      <p>按<strong>"原样"</strong>提供。我们不对基于应用的财务决策、AI 错误、临时不可用、其他成员的操作或第三方故障负责。</p>

      <h2>10. 知识产权</h2>
      <p>名称、徽标、设计和代码归我们所有。</p>

      <h2>11. 修改</h2>
      <p>重大变更将提前 30 天通知。</p>

      <h2>12. 终止</h2>
      <p>您可以随时终止。我们可以终止违反这些条款的账户。</p>

      <h2>13. 适用法律</h2>
      <p>受巴西法律管辖。管辖地：São Paulo/SP。</p>

      <h2>14. 联系</h2>
      <ul>
        <li><strong>支持：</strong><a href="mailto:suporte@familywalletapp.com.br">suporte@familywalletapp.com.br</a></li>
        <li><strong>隐私：</strong><a href="mailto:privacidade@familywalletapp.com.br">privacidade@familywalletapp.com.br</a></li>
      </ul>

      <p class="text-sm text-white/60 mt-12 pt-6 border-t border-white/10">⚖️ 模板。<strong>生产前建议法律审查。</strong></p>
    `,
  };

  // Renderers globais
  window.renderPrivacyPage = function (lang) {
    const el = document.getElementById('privacy-content');
    if (!el) return;
    el.innerHTML = PRIVACY[lang] || PRIVACY.pt;
  };

  window.renderTermsPage = function (lang) {
    const el = document.getElementById('terms-content');
    if (!el) return;
    el.innerHTML = TERMS[lang] || TERMS.pt;
  };
})();
