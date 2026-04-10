export default function LuzhouAviation3DSpace() {
  const images = {
    hero:
      'https://images.pexels.com/photos/256381/pexels-photo-256381.jpeg?auto=compress&cs=tinysrgb&w=1800',
    ai:
      'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1400',
    printing:
      'https://images.pexels.com/photos/20341733/pexels-photo-20341733.jpeg?auto=compress&cs=tinysrgb&w=1400',
    workshop:
      'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1400',
    industry:
      'https://images.pexels.com/photos/256302/pexels-photo-256302.jpeg?auto=compress&cs=tinysrgb&w=1400',
    contact:
      'https://images.pexels.com/photos/159775/library-la-trobe-study-students-159775.jpeg?auto=compress&cs=tinysrgb&w=1400',
  };

  const pathways = [
    {
      step: '01',
      title: '认知启蒙',
      desc: '了解AI、3D打印与智能制造的基本概念，建立面向未来的技术认知。',
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
      <header className="relative overflow-hidden bg-[#06162d] text-white">
        <div className="absolute inset-0 bg-gradient-to-r from-[#061122] via-[#0a2746] to-[#0b567c]" />
        <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-8 lg:px-10 lg:pb-28 lg:pt-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div className="text-sm tracking-wide text-white/80">泸州航发3D智造空间</div>
            <nav className="hidden gap-8 text-sm text-white/70 md:flex">
              <a href="#engines" className="transition hover:text-white">双引擎</a>
              <a href="#pathway" className="transition hover:text-white">成长路径</a>
              <a href="#industry" className="transition hover:text-white">产业资源</a>
              <a href="#services" className="transition hover:text-white">服务内容</a>
              <a href="#contact" className="transition hover:text-white">合作咨询</a>
            </nav>
          </div>

          <div className="grid gap-14 pt-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:pt-20">
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs tracking-[0.18em] text-white/90">
                AI × 3D打印 × 智能制造
              </div>
              <h1 className="leading-[1.1] lg:leading-[1.15]">
                泸州航发3D智造空间
                <span className="mt-6 block text-cyan-300/90">面向未来智能制造的人才启蒙与实践平台</span>
              </h1>
              <p className="mt-8 max-w-xl text-base leading-8 text-white/75 lg:text-lg">
                以AI创意设计与3D打印制造为核心，构建从认知启蒙到实践创造的完整创客体系，让更多青少年、大学生与合作单位走进智能制造世界。
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
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.ai} alt="AI创意设计与数字创作" className="h-72 w-full object-cover" />
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

            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.printing} alt="3D打印设备与制造实践" className="h-72 w-full object-cover" />
              <div className="p-8">
                <div className="text-sm tracking-[0.18em] text-cyan-700">3D智造实践</div>
                <h3 className="mt-4 text-3xl font-semibold">从设计原型到实体输出</h3>
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
            <h2 className="mt-4 text-4xl font-semibold tracking-tight lg:text-5xl">一条完整的创客成长路径</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {pathways.map((item) => (
                <div key={item.step} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="text-sm tracking-[0.18em] text-cyan-300">{item.step}</div>
                  <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/75">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="industry" className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-[0.92fr_1.08fr] lg:px-10 lg:py-24">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10">
            <div className="text-sm tracking-[0.18em] text-cyan-700">产业资源与技术支撑</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">从产业园到技术团队的真实支撑</h2>
            <p className="mt-6 text-base leading-8 text-slate-600">
              依托泸州航发增材制造产业园，园区内已入驻多家增材制造相关企业，覆盖材料研发、设备制造、工艺应用等多个方向，形成较为完整的产业生态。
            </p>
            <p className="mt-4 text-base leading-8 text-slate-600">
              同时拥有由工程师、技术专家及产业导师组成的专业团队，不仅服务中小学生启蒙教育，也为在校大学生提供产学研实训课程与实践平台。
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.industry} alt="产业园与制造环境场景" className="h-full w-full object-cover" />
            </div>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 lg:p-10">
              <div className="text-sm tracking-[0.18em] text-cyan-700">核心支撑</div>
              <ul className="mt-6 space-y-4 text-slate-600">
                <li>• 入驻企业：材料、设备、应用等多方向协同</li>
                <li>• 技术团队：工程师、技术专家、创客导师共同参与</li>
                <li>• 应用场景：科普、研学、创客活动、产业体验、大学生实训</li>
                <li>• 平台价值：打通认知启蒙、实践训练与产业理解</li>
              </ul>
              <div className="mt-8 overflow-hidden rounded-[1.5rem]">
                <img src={images.printing} alt="3D打印设备运行细节" className="h-56 w-full object-cover" />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-7xl px-6 py-6 lg:px-10 lg:py-12">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-start">
            <div>
              <div className="text-sm tracking-[0.18em] text-cyan-700">服务内容</div>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight">面向不同人群的创客服务体系</h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                以AI创意设计与3D智造实践为主线，针对不同年龄和不同合作对象，形成分层次、多场景、可拓展的服务体系。
              </p>
              <div className="mt-8 grid gap-4">
                {services.map((item) => (
                  <div key={item.group} className="rounded-[1.5rem] border border-slate-200 bg-white p-6">
                    <div className="text-lg font-semibold">{item.group}</div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.items.map((sub) => (
                        <span key={sub} className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                          {sub}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.workshop} alt="创客课堂与项目实践场景" className="h-[520px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section id="resources" className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
          <div className="max-w-3xl">
            <div className="text-sm tracking-[0.18em] text-cyan-700">创客资源平台</div>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight">工具、内容与资讯的持续延伸</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {resources.map((item) => (
              <div key={item.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-8">
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
                <span className="mt-2 block">开启智能制造体验与合作</span>
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
                欢迎学校、家长、大学院校及合作单位咨询预约，了解科普体验、创客课程、研学实践、大学生实训与产业参访等服务内容。
              </p>
              <div className="mt-8 grid gap-4">
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">联系人：待填写</div>
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">联系电话：待填写</div>
                <div className="rounded-[1.25rem] border border-slate-200 px-5 py-4 text-sm text-slate-700">微信二维码：待替换</div>
              </div>
            </div>
            <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white">
              <img src={images.contact} alt="交流与合作咨询场景" className="h-full min-h-[420px] w-full object-cover" />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>© 2026 泸州航发3D智造空间</div>
          <div>面向未来智能制造的人才启蒙与实践平台</div>
        </div>
      </footer>
    </div>
  );
}
