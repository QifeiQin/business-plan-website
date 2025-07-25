import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Target, Zap, Users, TrendingUp, Shield, Globe } from 'lucide-react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('executive-summary');
  const [expandedSections, setExpandedSections] = useState({});

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    { id: 'executive-summary', title: '执行摘要', icon: Target },
    { id: 'introduction', title: '引言', icon: Globe },
    { id: 'market-analysis', title: '市场与技术分析', icon: TrendingUp },
    { id: 'current-status', title: '巨量引擎现状分析', icon: Shield },
    { id: 'application-scenarios', title: 'LLM和Agent应用场景分析', icon: Zap },
    { id: 'development-plan', title: '三年发展规划', icon: Users },
    { id: 'implementation', title: '技术实施路径和资源需求', icon: Target },
    { id: 'financial-forecast', title: '财务预测与风险评估', icon: TrendingUp },
    { id: 'conclusion', title: '结论', icon: Globe }
  ];

  const yearPlans = [
    {
      year: '第一年',
      title: '基础建设与核心能力突破',
      subtitle: 'Foundation Building & Core Capability Breakthrough',
      goals: [
        '构建LLM与Agent技术基础设施',
        '实现AIGC创意生产的显著提效',
        '初步实现智能投放策略的自动化与精细化',
        '提升用户服务体验'
      ],
      outcomes: [
        'AIGC创意生成效率提升30%以上',
        '智能投放策略优化，平均转化成本降低5-10%',
        '智能客服解决率达到60%以上'
      ]
    },
    {
      year: '第二年',
      title: '深度融合与生态拓展',
      subtitle: 'Deep Integration & Ecosystem Expansion',
      goals: [
        '实现AIGC创意与投放的深度融合',
        '构建更精细化的用户画像与精准定向能力',
        '全面提升智能投放的自动化与智能化水平',
        '拓展Agent应用场景'
      ],
      outcomes: [
        'AIGC创意与投放效果提升10-15%',
        '用户画像精准度提升20%',
        '智能投放自动化率达到80%以上'
      ]
    },
    {
      year: '第三年',
      title: '引领行业与生态共赢',
      subtitle: 'Industry Leadership & Ecosystem Co-creation',
      goals: [
        '成为AI驱动的广告营销行业领导者',
        '实现营销全链路的智能化与自动化',
        '构建开放、繁荣的智能营销生态',
        '探索前沿技术与商业模式创新'
      ],
      outcomes: [
        '成为AI驱动的广告营销行业领导者',
        '实现营销全链路的高度智能化和自动化',
        '构建开放、繁荣的智能营销生态'
      ]
    }
  ];

  const applicationScenarios = [
    {
      title: '创意生成与优化',
      description: '基于LLM的智能创意助手，实现深度理解与生成、多模态创意生成、创意风格迁移与定制',
      benefits: ['大幅提升创意生产效率', '提升创意质量与效果', '降低创意成本', '实现个性化与规模化兼顾']
    },
    {
      title: '智能投放策略优化',
      description: '策略生成Agent和实时优化Agent，实现多目标优化、场景化策略推荐、自然语言策略配置',
      benefits: ['提升投放效率与效果', '降低人工干预成本', '增强市场适应性', '提供决策支持']
    },
    {
      title: '用户画像和精准定向',
      description: '智能用户洞察Agent和精准定向Agent，构建多维度用户画像、意图识别与预测',
      benefits: ['提升广告精准度', '优化用户体验', '发掘新增长点', '强化数据隐私合规']
    },
    {
      title: '实时竞价和预算管理',
      description: '智能竞价Agent和智能预算管理Agent，实现毫秒级实时竞价决策、动态预算分配与调整',
      benefits: ['提升预算利用效率', '降低人工操作成本', '增强市场竞争力', '风险控制与规避']
    },
    {
      title: '客户服务和运营支持',
      description: '智能客服Agent和智能运营Agent，提供24/7即时响应、自动化任务执行、智能诊断与预警',
      benefits: ['提升客户满意度', '降低运营成本', '赋能广告主', '构建智能生态']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">巨量引擎</h1>
                <p className="text-sm text-gray-600">LLM与Agent赋能广告投放系统</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-lg font-semibold text-gray-900">三年商业计划书</p>
              <p className="text-sm text-gray-600">2025-2027</p>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar Navigation */}
          <div className="w-80 bg-white rounded-xl shadow-lg p-6 h-fit sticky top-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">目录</h3>
            <nav className="space-y-2">
              {sections.map((section) => {
                const Icon = section.icon;
                return (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                      activeSection === section.id
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-medium">{section.title}</span>
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Executive Summary */}
            {activeSection === 'executive-summary' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">执行摘要</h2>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    本商业计划书旨在阐述巨量引擎如何通过深度融合大语言模型（LLM）和智能体（Agent）技术，在未来三年内全面提升其广告投放系统的智能化、自动化水平，巩固市场领导地位，并开拓新的增长点。
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {yearPlans.map((plan, index) => (
                      <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.year}</h3>
                        <h4 className="text-lg font-semibold text-blue-700 mb-3">{plan.title}</h4>
                        <p className="text-sm text-gray-600 mb-4">{plan.subtitle}</p>
                        <div className="space-y-2">
                          <h5 className="font-medium text-gray-900">核心目标：</h5>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {plan.goals.slice(0, 2).map((goal, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                <span>{goal}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-6 text-white">
                    <h3 className="text-xl font-bold mb-4">预期成果</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold mb-2">技术突破</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• AIGC创意生成效率提升30%+</li>
                          <li>• 智能投放自动化率达到80%+</li>
                          <li>• 用户画像精准度提升20%</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">商业价值</h4>
                        <ul className="space-y-1 text-sm">
                          <li>• 平均转化成本降低5-15%</li>
                          <li>• 广告主ROI持续提升</li>
                          <li>• 构建开放智能营销生态</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Introduction */}
            {activeSection === 'introduction' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">引言</h2>
                </div>
                
                <div className="prose max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    在当今快速演进的数字经济时代，广告营销行业正经历着前所未有的变革。随着互联网流量红利的逐渐消退，以及用户对个性化、高质量内容需求的日益增长，传统的广告投放模式面临着效率瓶颈和效果挑战。
                  </p>
                  
                  <div className="bg-gray-50 rounded-lg p-6 mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">行业变革驱动力</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">技术革新</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 大语言模型（LLM）快速发展</li>
                          <li>• 智能体（Agent）技术成熟</li>
                          <li>• 多模态AI能力提升</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900 mb-2">市场需求</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• 个性化营销需求增长</li>
                          <li>• 自动化运营要求提升</li>
                          <li>• 精准投放效果追求</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    巨量引擎，作为字节跳动旗下领先的综合数字化营销服务平台，凭借其整合抖音、今日头条、西瓜视频等海量流量资源，以及在推荐算法和AIGC（AI生成内容）等方面的深厚技术积累，已在中国数字营销市场占据举足轻重的地位。
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">战略目标</h3>
                    <p className="text-blue-800">
                      通过本计划的实施，巨量引擎将不仅能够巩固其在数字营销领域的领导地位，更将成为AI驱动营销的行业标杆，为广告主创造更大的商业价值，并引领整个行业的智能化转型。
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Market Analysis */}
            {activeSection === 'market-analysis' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">市场与技术分析</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">数字营销市场概览与趋势</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      全球数字营销市场正经历着高速增长和深刻变革。随着互联网用户规模的持续扩大、移动互联网的普及以及短视频、直播等新兴内容形式的崛起，广告主的营销预算正加速向线上转移。
                    </p>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                      <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6">
                        <h4 className="font-semibold text-green-800 mb-2">个性化与精准化需求</h4>
                        <p className="text-sm text-green-700">广告主追求更精准地触达目标受众，实现个性化营销，提升ROI</p>
                      </div>
                      <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6">
                        <h4 className="font-semibold text-blue-800 mb-2">内容化与场景化营销</h4>
                        <p className="text-sm text-blue-700">广告与内容、场景深度融合，原生广告、信息流广告成为主流</p>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                        <h4 className="font-semibold text-purple-800 mb-2">自动化与智能化运营</h4>
                        <p className="text-sm text-purple-700">对自动化、智能化营销工具的需求日益迫切，提高效率、降低成本</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">AI技术在广告投放领域的应用现状</h3>
                    <div className="space-y-6">
                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">AI深度融入广告全链路</h4>
                        <p className="text-gray-700 mb-4">
                          领先的广告平台正将AI技术深度融入广告投放的每一个环节，从创意构思、素材生成，到用户洞察、投放策略制定、实时竞价优化、预算管理，再到效果评估和归因分析。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Google Ads AI Max</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">Meta Advantage+</span>
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">百度轻舸平台</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">生成式AI（AIGC）成为核心驱动力</h4>
                        <p className="text-gray-700 mb-4">
                          LLM和多模态AI在广告创意和内容生成方面展现出巨大潜力，能够根据用户需求、产品特点和营销目标，自动生成高质量、多样化的广告素材。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">阿里妈妈</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">腾讯妙思</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">百度擎舵</span>
                        </div>
                      </div>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">AI Agent崛起</h4>
                        <p className="text-gray-700 mb-4">
                          AI Agent正从辅助工具向营销核心生产力转变，能够自主感知环境、进行决策、调用工具并执行复杂任务，实现营销全流程的自动化与智能化。
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">百度营销智能体</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">京粉智能推广助手</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm">Google Marketing Advisor</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Current Status */}
            {activeSection === 'current-status' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">巨量引擎现状分析</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">业务模式与市场地位</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      巨量引擎作为抖音集团旗下的官方营销服务品牌，为不同体量、地域的企业及个体提供数字化营销服务，旨在激发创造、驱动生意增长。
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">核心优势</h4>
                        <ul className="space-y-2 text-blue-800">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>庞大的流量和用户基础</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>强大的算法和数据能力</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>内容生态的优势</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>一站式营销解决方案</span>
                          </li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-900 mb-3">业务模式</h4>
                        <ul className="space-y-2 text-green-800">
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>短视频+直播+阵地的"三域合一"</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>打通公域、商域和私域</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>闭环交易链路</span>
                          </li>
                          <li className="flex items-start space-x-2">
                            <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                            <span>全营销链路服务</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">现有AI技术应用</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-purple-900 mb-3">AIGC能力</h4>
                        <ul className="space-y-2 text-purple-800 text-sm">
                          <li>• 即创平台：视频创作、图文生成、直播工具</li>
                          <li>• 数字人：灵动数字人能力</li>
                          <li>• AI脚本生成、智能成片工具</li>
                        </ul>
                      </div>
                      
                      <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-orange-900 mb-3">智能投放与优化</h4>
                        <ul className="space-y-2 text-orange-800 text-sm">
                          <li>• UBMax自动化投放产品</li>
                          <li>• OCPM智能算法</li>
                          <li>• 智能放量、营销科学</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">痛点与改进空间</h3>
                    <div className="bg-red-50 border-l-4 border-red-500 p-6">
                      <h4 className="text-lg font-semibold text-red-900 mb-3">主要挑战</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <ul className="space-y-2 text-red-800 text-sm">
                          <li>• AIGC内容质量与多样性有待提升</li>
                          <li>• 自动化投放的精细化与透明度</li>
                          <li>• 跨平台、跨场景的协同与数据整合</li>
                        </ul>
                        <ul className="space-y-2 text-red-800 text-sm">
                          <li>• 用户体验与操作复杂性</li>
                          <li>• 实时响应与个性化服务</li>
                          <li>• 数据隐私与合规性挑战</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Application Scenarios */}
            {activeSection === 'application-scenarios' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">LLM和Agent应用场景分析</h2>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    结合LLM（大语言模型）和Agent（智能体）的强大能力，巨量引擎可以在现有基础上，进一步提升广告投放系统的智能化水平：
                  </p>
                  
                  <div className="space-y-6">
                    {applicationScenarios.map((scenario, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <button
                          onClick={() => toggleSection(`scenario-${index}`)}
                          className="w-full px-6 py-4 bg-gray-50 hover:bg-gray-100 flex items-center justify-between transition-colors"
                        >
                          <h3 className="text-xl font-semibold text-gray-900">{scenario.title}</h3>
                          {expandedSections[`scenario-${index}`] ? (
                            <ChevronDown className="w-5 h-5 text-gray-500" />
                          ) : (
                            <ChevronRight className="w-5 h-5 text-gray-500" />
                          )}
                        </button>
                        
                        {expandedSections[`scenario-${index}`] && (
                          <div className="px-6 py-4 bg-white">
                            <p className="text-gray-700 mb-4">{scenario.description}</p>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-2">预期效益：</h4>
                              <div className="grid md:grid-cols-2 gap-2">
                                {scenario.benefits.map((benefit, idx) => (
                                  <div key={idx} className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-sm text-gray-700">{benefit}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Development Plan */}
            {activeSection === 'development-plan' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Users className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">三年发展规划</h2>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    基于对LLM和Agent技术在广告投放领域应用的深入分析，我们提出以下为期三年的发展规划：
                  </p>
                  
                  <div className="space-y-8">
                    {yearPlans.map((plan, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                          <h3 className="text-2xl font-bold mb-2">{plan.year}：{plan.title}</h3>
                          <p className="text-blue-100">{plan.subtitle}</p>
                        </div>
                        
                        <div className="p-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">核心目标</h4>
                              <ul className="space-y-2">
                                {plan.goals.map((goal, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-sm text-gray-700">{goal}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="text-lg font-semibold text-gray-900 mb-3">预期成果</h4>
                              <ul className="space-y-2">
                                {plan.outcomes.map((outcome, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                                    <span className="text-sm text-gray-700">{outcome}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Implementation */}
            {activeSection === 'implementation' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Target className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">技术实施路径和资源需求</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">技术实施路径</h3>
                    <div className="space-y-6">
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">基础层：大模型与Agent框架</h4>
                        <ul className="space-y-2 text-blue-800 text-sm">
                          <li>• 持续投入LLM研发，针对广告营销场景优化</li>
                          <li>• 构建统一Agent平台，支持模块化开发与管理</li>
                          <li>• 强化数据基础设施，支持毫秒级决策</li>
                        </ul>
                      </div>
                      
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-900 mb-3">应用层：场景化Agent开发</h4>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-green-800 text-sm">
                            <li>• 创意Agent：AIGC创意生成、优化、测试</li>
                            <li>• 投放Agent：策略制定、竞价、预算管理</li>
                          </ul>
                          <ul className="space-y-2 text-green-800 text-sm">
                            <li>• 用户洞察Agent：画像构建、意图识别</li>
                            <li>• 服务Agent：智能客服、运营支持</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-purple-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-purple-900 mb-3">安全与合规层</h4>
                        <ul className="space-y-2 text-purple-800 text-sm">
                          <li>• AI伦理与合规体系建设</li>
                          <li>• 隐私计算技术应用</li>
                          <li>• AI驱动的内容审核系统</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">资源需求</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="bg-orange-50 rounded-lg p-4">
                          <h4 className="font-semibold text-orange-900 mb-2">人才资源</h4>
                          <ul className="text-sm text-orange-800 space-y-1">
                            <li>• AI科学家与工程师</li>
                            <li>• 产品经理与设计师</li>
                            <li>• 行业专家与运营人员</li>
                            <li>• 数据分析师</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 rounded-lg p-4">
                          <h4 className="font-semibold text-red-900 mb-2">计算资源</h4>
                          <ul className="text-sm text-red-800 space-y-1">
                            <li>• GPU算力集群</li>
                            <li>• 大规模数据存储</li>
                            <li>• 高速网络传输</li>
                            <li>• 云计算平台</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="bg-teal-50 rounded-lg p-4">
                          <h4 className="font-semibold text-teal-900 mb-2">数据资源</h4>
                          <ul className="text-sm text-teal-800 space-y-1">
                            <li>• 高质量训练数据</li>
                            <li>• 外部数据合作</li>
                            <li>• 数据治理体系</li>
                            <li>• 隐私保护机制</li>
                          </ul>
                        </div>
                        
                        <div className="bg-indigo-50 rounded-lg p-4">
                          <h4 className="font-semibold text-indigo-900 mb-2">研发投入</h4>
                          <ul className="text-sm text-indigo-800 space-y-1">
                            <li>• 大额研发预算</li>
                            <li>• 创新孵化基金</li>
                            <li>• 技术合作投入</li>
                            <li>• 生态建设资金</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Financial Forecast */}
            {activeSection === 'financial-forecast' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <TrendingUp className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">财务预测与风险评估</h2>
                </div>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">财务预测</h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      基于本商业计划书所提出的LLM和Agent赋能策略，我们预期巨量引擎在未来三年将实现显著的业务增长和盈利能力提升。
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 mb-8">
                      <div className="bg-green-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-green-900 mb-3">核心假设</h4>
                        <ul className="space-y-2 text-green-800 text-sm">
                          <li>• 广告主数量年增长15%-20%</li>
                          <li>• 平均广告主支出年增长10%-15%</li>
                          <li>• 新业务模式收入占比5%-10%</li>
                          <li>• 成本结构持续优化</li>
                        </ul>
                      </div>
                      
                      <div className="bg-blue-50 rounded-lg p-6">
                        <h4 className="text-lg font-semibold text-blue-900 mb-3">预期成果</h4>
                        <ul className="space-y-2 text-blue-800 text-sm">
                          <li>• 第一年收入增长15%-20%</li>
                          <li>• 第二年收入增长10%-15%</li>
                          <li>• 第三年收入增长8%-12%</li>
                          <li>• 利润率持续健康增长</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">风险评估与应对策略</h3>
                    <div className="space-y-4">
                      <div className="border border-red-200 rounded-lg p-4">
                        <h4 className="font-semibold text-red-900 mb-2">技术风险</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-red-800 mb-2">主要风险：</p>
                            <ul className="text-red-700 space-y-1">
                              <li>• 模型效果不及预期</li>
                              <li>• 技术人才短缺</li>
                              <li>• 算力成本高昂</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-red-800 mb-2">应对策略：</p>
                            <ul className="text-red-700 space-y-1">
                              <li>• 持续研发投入和A/B测试</li>
                              <li>• 加大招聘和人才培养</li>
                              <li>• 优化模型效率和混合云部署</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-orange-200 rounded-lg p-4">
                        <h4 className="font-semibold text-orange-900 mb-2">市场风险</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-orange-800 mb-2">主要风险：</p>
                            <ul className="text-orange-700 space-y-1">
                              <li>• 竞争对手快速追赶</li>
                              <li>• 广告主接受度低</li>
                              <li>• 市场需求变化</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-orange-800 mb-2">应对策略：</p>
                            <ul className="text-orange-700 space-y-1">
                              <li>• 持续创新保持技术领先</li>
                              <li>• 加强市场教育和用户培训</li>
                              <li>• 敏锐洞察和快速响应机制</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="border border-purple-200 rounded-lg p-4">
                        <h4 className="font-semibold text-purple-900 mb-2">合规与伦理风险</h4>
                        <div className="grid md:grid-cols-2 gap-4 text-sm">
                          <div>
                            <p className="text-purple-800 mb-2">主要风险：</p>
                            <ul className="text-purple-700 space-y-1">
                              <li>• 数据隐私泄露</li>
                              <li>• 算法偏见与歧视</li>
                              <li>• AIGC内容合规性</li>
                            </ul>
                          </div>
                          <div>
                            <p className="text-purple-800 mb-2">应对策略：</p>
                            <ul className="text-purple-700 space-y-1">
                              <li>• 严格遵守数据隐私法规</li>
                              <li>• 优化训练数据和公平性评估</li>
                              <li>• 强化AI内容审核系统</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Conclusion */}
            {activeSection === 'conclusion' && (
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="w-8 h-8 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900">结论</h2>
                </div>
                
                <div className="space-y-8">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    本商业计划书详细阐述了巨量引擎如何通过深度融合大语言模型（LLM）和智能体（Agent）技术，在未来三年内全面提升其广告投放系统的智能化、自动化水平的战略愿景、实施路径和预期效益。
                  </p>
                  
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
                    <h3 className="text-2xl font-bold mb-4">核心价值主张</h3>
                    <p className="text-blue-100 mb-6">
                      LLM和Agent不仅是技术工具的升级，更是对广告营销范式的一次深刻重塑，它将驱动广告行业从"人海战术"向"智能协作"转变，从"经验决策"向"数据驱动"进化。
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold mb-2">技术突破</h4>
                        <ul className="space-y-1 text-sm text-blue-100">
                          <li>• 创意生产的革命性飞跃</li>
                          <li>• 投放决策的极致智能化</li>
                          <li>• 用户洞察的深度与精准</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">商业价值</h4>
                        <ul className="space-y-1 text-sm text-blue-100">
                          <li>• 客户服务与运营的全面升级</li>
                          <li>• 构建开放智能营销生态</li>
                          <li>• 引领行业智能化转型</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-3">未来展望</h3>
                    <p className="text-green-800 leading-relaxed">
                      展望未来三年，巨量引擎将不仅仅是一个广告投放平台，更将成为一个开放、智能、高效的营销生态系统。我们将与广告主、开发者、合作伙伴共同成长，共同探索AI营销的无限可能，最终实现"激发创造，驱动生意增长"的使命，并成为全球AI驱动营销的行业领导者。
                    </p>
                  </div>

                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-6 py-3">
                      <Zap className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900">巨量引擎 × AI营销的未来</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">© 2025 巨量引擎LLM与Agent赋能广告投放系统三年商业计划书</p>
            <p className="text-sm text-gray-500 mt-2">由 Manus AI 生成</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

