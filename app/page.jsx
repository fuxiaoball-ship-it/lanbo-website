export default function LanboStudyBaseWebsite() {
  const images = {
    hero:
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1800',
    intro:
      'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1400',
    printer:
      'https://images.pexels.com/photos/20341733/pexels-photo-20341733.jpeg?auto=compress&cs=tinysrgb&w=1400',
    workshop:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400',
    contact:
      'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1400',
  };

  const highlights = [
    {
      title: '产业背景',
      desc: '依托增材制造产业集聚区与龙头企业资源，真实接触前沿技术。',
    },
    {
      title: '科技体验',
      desc: '通过展示、体验与互动实践，让科技不再停留在概念层面。',
    },
    {
      title: '创新启发',
      desc: '培养动手能力与创新思维，激发未来制造与创客兴趣。',
    },
  ];

  const tools = [
    {
      name: 'AI绘图工具',
      desc: '适合青少年与教师快速上手的创意设计工具。',
    },
    {
      name: '3D模型生成AI',
      desc: '文本与图片生成3D模型的常用入口。',
    },
    {
      name: '切片软件',
      desc: '主流3D打印切片软件入口与简要说明。',
    },
  ];

  const libraries = [
    { name: '创想三维模型库', note: '课堂演示与学生兴趣作品的优质资源。' },
    { name: '拓竹模型库', note: '创客与家庭打印用户常用资源平台。' },
    { name: '精选教学模型', note: '后期逐步沉淀空间自有教学模型与优秀作品。' },
  ];

  const news = [
    '每周精选3—5条3D打印行业动态',
    '国际前沿技术与材料趋势解读',
    '面向家长与学校的通俗化应用说明',
  ];

  const services = [
    '3D打印科普体验',
    '创客主题课程',
    '学校团体研学实践',
    '产业参访与科技体验',
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <header className="relative overflow-hidden bg-[#06162d] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#071225] via-[#0a2746] to-[#0a4f73]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="text-sm tracking-wide text-white/80">泸州航发增材制造“3D打印”创客空间</div>
            <nav className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#about" className="transition hover:text-white">空间简介</a>
              <a href="#services" className="transition hover:text-white">服务内容</a>
              <a href="#resources" className="transition hover:text-white">资源导航</a>
              <a href="#contact" className="transition hover:text-white">合作与咨询</a>
            </nav>
          </div>

          <div className="grid gap-14 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-20">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[0.18em] text-white/75">
                3D打印 · 创客教育 · 科技体验
              </div>
              <h1 className="mt-8 text-5xl font-semibold tracking-tight lg:text-7xl lg:leading-[1.02]">
                走进智能制造
                <span className="mt-2 block text-cyan-300">开启未来创造力</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/75 lg:text-lg">
                依托泸州航发集团增材制造产业基础建设，打造集科技展示、创客教育、研学实践、产业体验与创新启发于一体的综合性创客空间，让青少年、学校与合作单位在真实产业场景中理解科技、激发创新。
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#services"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:-translate-y-0.5"
                >
                  了解服务
                </a>
                <a
                  href="#contact"
                  className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  预约参观
                </a>
              </div>
            </div>

            <div>
              <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-2xl backdrop-blur">
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
        <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-6 md:grid-cols-3">
            {highlights.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
                <div className="text-sm tracking-[0.18em] text-cyan-700">{item.title}</div>
                <p className="mt-5 text-base leading-8 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto grid max-w-7xl gap-10 px-6 py-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-12">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10">
            <div className="text-sm tracking-[0.18em] text-cyan-700">空间简介</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">泸州航发增材制造“3D打印”创客空间</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              位于西南地区增材制造产业创新集聚区，依托泸州航发集团产业优势，打造以增材制造为核心的综合性创客空间。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              业务涵盖科技展示、科普教育、研学实践、创客活动、产业参访与创新启发等多个方向，致力于让不同人群走进智能制造世界，在实践中理解科技，在创造中培养能力。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              依托泸州航发增材制造产业园，园区内已集聚多家增材制造相关企业，涵盖材料研发、设备制造、工艺应用等多个方向，形成完整产业生态。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              同时汇聚了一支由工程师、技术专家及产业导师组成的专业团队，可为中小学生提供启蒙教育，也可为在校大学生提供产学研结合的实训课程与实践平台，实现从认知到应用的全链条培养。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.intro} alt="创客课堂协作学习场景" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-[2rem] bg-[#071a33] p-8 text-white lg:p-10">
              <div className="text-sm tracking-[0.18em] text-cyan-300">我们的特色</div>
              <h3 className="mt-4 text-3xl font-semibold leading-tight">不只是研学，而是面向未来的综合创客平台</h3>
              <ul className="mt-6 space-y-3 text-white/80">
                <li>• 真实产业背景支撑</li>
                <li>• 科技展示 + 创客教育 + 产业体验</li>
                <li>• 从启蒙认知到实践创新的完整路径</li>
              </ul>
              <div className="mt-8 overflow-hidden rounded-[1.5rem]">
                <img src={images.printer} alt="3D打印设备运行细节展示" className="h-56 w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <div className="text-sm tracking-[0.18em] text-cyan-700">服务内容</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">面向不同人群的创客服务方案</h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {services.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-slate-200 bg-white px-5 py-4 text-sm font-medium text-slate-700">
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 max-w-2xl text-base leading-8 text-slate-500">
                服务体系正在持续完善中，后续将陆续发布完整的课程设置、活动安排、产业参访与创客实践方案。
              </p>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.workshop} alt="创客课堂项目实践场景" className="h-[420px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="resources" className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <div className="text-sm tracking-[0.18em] text-cyan-700">资源导航</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">AI设计与工具入口</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {tools.map((item) => (
                <div key={item.name} className="rounded-[1.75rem] border border-slate-200 bg-white p-6">
                  <div className="text-xs tracking-[0.18em] text-cyan-700">外链入口</div>
                  <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.intro} alt="青少年创客课堂中的协作学习场景" className="h-[420px] w-full object-cover" />
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.printer} alt="3D打印设备科技细节展示" className="h-[420px] w-full object-cover" />
            </div>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="text-sm tracking-[0.18em] text-cyan-700">模型资源</div>
              <h3 className="mt-4 text-3xl font-semibold">3D模型库导航</h3>
              <div className="mt-8 space-y-4">
                {libraries.map((item) => (
                  <div key={item.name} className="rounded-[1.25rem] border border-slate-200 px-5 py-4">
                    <div className="font-semibold">{item.name}</div>
                    <p className="mt-2 text-sm leading-7 text-slate-600">{item.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8">
              <div className="text-sm tracking-[0.18em] text-cyan-700">资讯精选</div>
              <h3 className="mt-4 text-3xl font-semibold">3D打印行业动态</h3>
              <div className="mt-8 space-y-4">
                {news.map((item) => (
                  <div key={item} className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm leading-7 text-slate-600">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10">
              <div className="text-sm tracking-[0.18em] text-cyan-700">合作与咨询</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">预约参观 / 合作咨询</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                欢迎学校、家长及合作单位咨询预约，了解空间服务、基地参观、研学合作、创客活动与产业体验安排。
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">联系人：待填写</div>
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">联系电话：待填写</div>
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">微信二维码：待替换</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.contact} alt="研学交流与合作咨询场景" className="h-full min-h-[420px] w-full object-cover" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>© 2026 泸州航发增材制造“3D打印”创客空间</div>
          <div>让更多人走近智能制造，在实践中理解科技，在创造中启发未来</div>
        </div>
      </footer>
    </div>
  );
}
