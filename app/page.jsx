export default function LuzhouAviation3DSpace() {
  const images = {
  hero:
    'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1800',

  engineAi: '/images/engine-ai.jpg',
  enginePrint: '/images/engine-print.jpg',
  industryFactory: '/images/industry-factory.jpg',
  industryExpert: '/images/industry-expert.jpg',

  service: '/images/service-lab.jpg',   // ← 新增这行
  contactLab: '/images/contact-lab.jpg',
};

  const pathways = [
    {
      step: '01',
      title: '认知启蒙',
      desc: '了解AI、3D打印与智能制造的基础概念，建立面向未来的技术认知。',
    },
    {
      step: '02',
      title: '技术理解',
      desc: '理解设计、建模、打印与制造流程，形成对技术逻辑的初步掌握。',
    },
    {
      step: '03',
      title: '动手实践',
      desc: '通过项目任务、创客活动与实训课程，把知识转化为实践能力。',
    },
    {
      step: '04',
      title: '创新创造',
      desc: '从创意表达走向作品输出，逐步形成独立思考与创新实践能力。',
    },
  ];

  const services = [
    {
      group: '青少年',
      items: ['AI创意体验', '3D打印启蒙', '创客主题课程'],
    },
    {
      group: '大学生',
      items: ['建模与制造实践', '产学研实训', '项目化创新训练'],
    },
    {
      group: '学校 / 机构',
      items: ['团体研学', '科技实践活动', '定制课程与合作'],
    },
  ];

  const resources = [
    {
      title: 'AI工具',
      desc: '涵盖AI绘图、创意生成与数字设计等常用入口。',
    },
    {
      title: '模型库',
      desc: '汇聚3D模型素材与教学资源，支撑课程与创作实践。',
    },
    {
      title: '打印工具',
      desc: '整合切片软件、打印流程与实践应用工具。',
    },
    {
      title: '行业资讯',
      desc: '同步国内外增材制造与AI创意设计领域动态。',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
     <header className="relative overflow-visible bg-[#06162d]/85 text-white backdrop-blur-md">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061122] via-[#0a2746] to-[#0b567c]" />

        <div className="relative mx-auto max-w-7xl px-6 pt-6 pb-10 lg:px-10 lg:pt-8 lg:pb-20">
          <div className="fixed top-0 left-0 w-full z-50 flex items-center justify-between border-b border-white/10 pb-3 px-6 lg:px-10 bg-[#06264a]/95 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <img
                src="/images/hf-logo.png"
                alt="泸州航发logo"
                className="h-9 w-auto object-contain"
              />
              <div className="text-sm font-medium tracking-wide text-white/85">
                泸州蓝博航发职业培训学校有限公司
              </div>
            </div>

            <nav className="hidden gap-8 text-sm font-medium text-white/70 md:flex">
              <a href="#engines" className="transition duration-200 hover:text-white">
                双引擎
              </a>
              <a href="#pathway" className="transition duration-200 hover:text-white">
                成长路径
              </a>
              <a href="#industry" className="transition duration-200 hover:text-white">
                产业资源
              </a>
              <a href="#services" className="transition duration-200 hover:text-white">
                服务内容
              </a>
              <a href="#contact" className="transition duration-200 hover:text-white">
                合作咨询
              </a>
            </nav>
          </div>

          <div className="grid gap-10 pt-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-sm text-white/90 backdrop-blur-md">
                AI × 3D打印 × 智能制造
              </div>

              <div className="mt-6 text-[26px] font-semibold tracking-tight text-white/95 lg:text-[32px]">
                泸州航发3D智造空间
              </div>

              <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight text-cyan-300 lg:text-6xl">
                面向未来智能制造的
                <span className="block text-white">人才启蒙与实践平台</span>
              </h1>
<p className="mt-4 text-sm tracking-[0.12em] text-cyan-200/80 uppercase">
  依托泸州航发产业资源与专业技术团队打造
</p>
              <p className="mt-7 max-w-xl text-base leading-8 text-white/75 lg:text-lg">
                以AI创意设计与3D打印制造为核心，构建从认知启蒙到实践创造的完整创客体系，
                让更多青少年、大学生与合作单位走进智能制造世界。
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-white px-7 py-4 text-base font-medium text-slate-900 transition hover:-translate-y-0.5 hover:shadow-lg"
                >
                  了解服务
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-7 py-4 text-base font-medium text-white transition hover:bg-white/10 hover:shadow-lg"
                >
                  预约参观
                </a>
              </div>
            </div>

            <div>
             <div className="overflow-visible rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur">
                <img
                  src={images.hero}
                  alt="3D打印设备与智能制造场景"
                  className="h-[460px] w-full rounded-[1.5rem] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="engines" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm tracking-[0.18em] text-cyan-700">双引擎核心</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
              AI × 3D打印
              <span className="mt-2 block">构建智能制造创客双引擎</span>
            </h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              从AI创意生成到3D实体制造，打通从想法到作品的完整链路，让创意真正被看见、被制造、被实现。
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="overflow-visible rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                src={images.engineAi}
                alt="AI设计与数字建模场景"
                className="h-72 w-full object-cover"
              />
              <div className="p-8">
                <div className="text-sm tracking-[0.18em] text-cyan-700">AI创意设计</div>
                <h3 className="mt-4 text-3xl font-semibold">从创意生成到数字表达</h3>
                <ul className="mt-6 space-y-3 text-slate-600">
                  <li>• AI绘图与视觉表达</li>
                  <li>• 创意生成与数字设计</li>
                  <li>• 快速概念建模</li>
                  <li>• 从想法到设计原型</li>
                </ul>
              </div>
            </div>

            <div className="overflow-visible rounded-[2rem] border border-slate-200 bg-white shadow-sm">
              <img
                src={images.enginePrint}
                alt="3D打印制造过程"
                className="h-72 w-full object-cover"
              />
              <div className="p-8">
                <div className="text-sm tracking-[0.18em] text-cyan-700">3D智造实践</div>
                <h3 className="mt-4 text-3xl font-semibold">从设计到实体制造</h3>
                <ul className="mt-6 space-y-3 text-slate-600">
                  <li>• 3D打印技术应用</li>
                  <li>• 建模与制造流程</li>
                  <li>• 实体产品输出</li>
                  <li>• 从设计到实物实现</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="pathway" className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-12">
          <div className="rounded-[2rem] bg-[#071a33] px-8 py-10 text-white lg:px-10 lg:py-12">
            <div className="text-sm tracking-[0.18em] text-cyan-300">能力成长路径</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">
              一条完整的创客成长路径
            </h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pathways.map((item) => (
                <div
                  key={item.step}
                  className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6"
                >
                  <div className="text-sm tracking-[0.18em] text-cyan-300">{item.step}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industry" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-6 xl:grid-cols-[1.1fr_0.7fr_0.7fr] xl:items-stretch">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10">
              <div className="text-sm tracking-[0.18em] text-cyan-700">产业资源与技术支撑</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                从产业园到技术团队的真实支撑
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-600">
                依托泸州航发增材制造产业园，园区内已入驻多家增材制造相关企业，
                覆盖材料研发、设备制造、工艺应用等多个方向，形成较为完整的产业生态。
              </p>
              <p className="mt-4 text-base leading-8 text-slate-600">
                同时拥有由工程师、技术专家及产业导师组成的专业团队，
                不仅服务中小学生启蒙教育，也为在校大学生提供产学研实训课程与实践平台。
              </p>
            </div>

            <div className="overflow-visible rounded-[2rem] border border-slate-200 bg-white">
              <img
                src={images.industryFactory}
                alt="大型3D打印工场场景"
                className="h-full min-h-[520px] w-full object-cover"
              />
            </div>

            <div className="overflow-visible rounded-[2rem] border border-slate-200 bg-white">
              <img
                src={images.industryExpert}
                alt="专家研究3D打印设备"
                className="h-full min-h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </section>

       <section
  id="services"
  className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24"
>
  <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
    
    <div>
      <div className="text-sm font-semibold tracking-[0.25em] text-cyan-600">
        服务内容
      </div>

      <h2 className="mt-4 text-4xl font-semibold leading-tight text-slate-900">
        面向不同人群的创客服务体系
      </h2>

      <p className="mt-6 text-lg leading-9 text-slate-600">
        以AI创意设计与3D智造实践为主线，
        针对不同年龄和不同合作对象，
        形成分层次、多场景、可拓展的服务体系。
      </p>

      <div className="mt-8 grid gap-3">

        {services.map((item) => (
          <div
            key={item.group}
            className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-4 transition duration-200 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="text-lg font-semibold text-slate-900">
              {item.group}
            </div>

            <div className="mt-3 flex flex-wrap gap-2">
              {item.items.map((sub) => (
                <span
                  key={sub}
                  className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
                >
                  {sub}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>

    <div className="overflow-visible rounded-[2rem] border border-slate-200 bg-white shadow-xl">
      <img
        src={images.service}
        alt="创客教育场景"
        className="h-[520px] w-full object-cover"
      />
    </div>

  </div>
</section>

        <section id="resources" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm tracking-[0.18em] text-cyan-700">创客资源平台</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">
              工具、内容与资讯的持续延伸（建设中）
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {resources.map((item) => (
              <div
                key={item.title}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <h3 className="text-2xl font-semibold">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 pb-16 pt-6 lg:px-10 lg:pb-24 lg:pt-12">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10">
              <div className="text-sm tracking-[0.18em] text-cyan-700">合作与行动</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">
                走进3D智造空间
                <span className="mt-2 block">开启智能制造体验、研学与合作</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                欢迎学校、家长、大学院校及合作单位咨询预约，了解科普体验、创客课程、研学实践、
                大学生实训与产业参访等服务内容。
              </p>
              <div className="mt-6 grid gap-3">
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">
                  联系人：付老师
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">
                  联系电话：13982755554
                </div>
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">
                  电子邮箱：109007346@qq.com
                </div>
              </div>
            </div>

            <div className="overflow-visible rounded-[2rem] border border-slate-200 bg-white">
              <img
                src={images.contactLab}
                alt="学生创新实验室团队协作场景"
                className="h-full min-h-[420px] w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
         <div>© 2026 泸州蓝博航发职业培训学校有限公司</div>
          <div>面向未来智能制造的人才启蒙与实践平台</div>
        </div>
      </footer>
    </div>
  );
}