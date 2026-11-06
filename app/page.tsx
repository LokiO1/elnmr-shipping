'use client';

import { motion, AnimatePresence } from 'framer-motion';
import {
  Package,
  Truck,
  MapPin,
  Clock,
  Shield,
  Users,
  TrendingUp,
  CheckCircle,
  Phone,
  Mail,
  Warehouse,
  BarChart3,
  Zap,
  Globe,
  Award,
  Star,
  ArrowRight,
  Calculator,
  Search,
  Sparkles,
  ChevronDown,
  ExternalLink,
  Percent,
  Check
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  // Calculator state
  const [calcRegion, setCalcRegion] = useState('cairo');
  const [calcOrders, setCalcOrders] = useState(25);
  const [trackingCode, setTrackingCode] = useState('');
  const [trackingResult, setTrackingResult] = useState<null | {
    id: string;
    status: string;
    step: number;
    destination: string;
  }>(null);

  const regionPrices: Record<string, { name: string; base: number }> = {
    cairo: { name: 'القاهرة / الجيزة', base: 120 },
    alex_in: { name: 'الإسكندرية (داخل)', base: 80 },
    alex_out: { name: 'الإسكندرية (خارج)', base: 60 },
    delta: { name: 'الدلتا والبحيرة وبورسعيد', base: 100 },
    upper_near: { name: 'الصعيد القريب (المنيا، بني سويف، أسيوط...)', base: 150 },
    upper_far: { name: 'الصعيد البعيد (أسوان، قنا، الوادي الجديد...)', base: 180 },
    special: { name: 'المناطق الخاصة (شرم الشيخ، سيناء، الأقصر...)', base: 200 },
  };

  const getDiscount = (orders: number) => {
    if (orders >= 150) return { pct: 30, name: 'باقة VIP' };
    if (orders >= 80) return { pct: 25, name: 'باقة البرو' };
    if (orders >= 40) return { pct: 20, name: 'باقة البزنس' };
    if (orders >= 20) return { pct: 15, name: 'باقة التوفير' };
    if (orders >= 10) return { pct: 10, name: 'باقة البداية' };
    return { pct: 0, name: 'سعر فردي' };
  };

  const currentDiscount = getDiscount(calcOrders);
  const baseCost = regionPrices[calcRegion].base * calcOrders;
  const savedAmount = Math.round((baseCost * currentDiscount.pct) / 100);
  const finalCost = baseCost - savedAmount;

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackingCode.trim()) return;
    setTrackingResult({
      id: trackingCode.toUpperCase(),
      status: 'الشحنة في الطريق للتسليم',
      step: 3,
      destination: 'الإسكندرية - الإبراهيمية',
    });
  };

  const features = [
    {
      icon: MapPin,
      title: 'متابعة دقيقة للشحنات',
      description: 'متابعة دقيقة للشحنات لحظة بلحظة لضمان وصولها بأمان وفي الوقت المحدد.',
      color: 'from-red-500 to-rose-600',
    },
    {
      icon: Zap,
      title: 'نظام إلكتروني متطور',
      description: 'نظام متطور وسهل الاستخدام لإدارة الشحنات والفواتير بكل احترافية.',
      color: 'from-amber-500 to-yellow-600',
    },
    {
      icon: CheckCircle,
      title: 'مرونة أنظمة الدفع',
      description: 'مرونة كاملة في أنظمة الدفع بما يناسب احتياجات العملاء (كاش، إنستاباي، محافظ إلكترونية).',
      color: 'from-red-600 to-amber-600',
    },
    {
      icon: Package,
      title: 'تغليف احترافي آمن',
      description: 'تغليف احترافي يحافظ على الشحنات ويضمن وصولها بأفضل حالة ممكنة.',
      color: 'from-yellow-500 to-amber-600',
    },
    {
      icon: BarChart3,
      title: 'تقارير دورية وشيتات',
      description: 'شيت تسليمات ومرتجعات دوري لمتابعة أوضح وأسهل وإدارة أدق للطلبات.',
      color: 'from-red-500 to-orange-500',
    },
    {
      icon: Users,
      title: 'خدمة عملاء مستمرة',
      description: 'خدمة عملاء متاحة باستمرار لتقديم الدعم والمتابعة الفورية والتنسيق المباشر.',
      color: 'from-amber-600 to-yellow-500',
    },
    {
      icon: Warehouse,
      title: 'مخازن مجهزة ومؤمنة',
      description: 'مخازن مجهزة وآمنة لتخزين البضائع وتجهيز الأوردرات بكل كفاءة وسرعة.',
      color: 'from-red-600 to-pink-600',
    },
    {
      icon: Shield,
      title: 'تحصيلات سريعة وموثوقة',
      description: 'تحصيالت سريعة وآمنة مع أعلى درجات الموثوقية والشفافية المالية.',
      color: 'from-orange-500 to-red-500',
    },
  ];

  const pricingTiers = [
    {
      name: 'باقة البداية',
      orders: 'من 10 إلى 19 أوردر',
      discount: '10%',
      savings: 'وفر 12 جنيه/أوردر',
      color: 'from-red-500 to-pink-500',
      popular: false,
    },
    {
      name: 'باقة التوفير',
      orders: 'من 20 إلى 39 أوردر',
      discount: '15%',
      savings: 'وفر 18 جنيه/أوردر',
      color: 'from-amber-500 to-orange-500',
      popular: false,
    },
    {
      name: 'باقة البزنس',
      orders: 'من 40 إلى 79 أوردر',
      discount: '20%',
      savings: 'وفر 24 جنيه/أوردر',
      bonus: 'شحنة مجانية كل 50 أوردر',
      color: 'from-red-600 to-rose-500',
      popular: true,
    },
    {
      name: 'باقة البرو',
      orders: 'من 80 إلى 149 أوردر',
      discount: '25%',
      savings: 'وفر 30 جنيه/أوردر',
      bonus: 'أولوية استلام + مدير حساب',
      color: 'from-yellow-600 to-amber-600',
      popular: false,
    },
    {
      name: 'باقة VIP',
      orders: '150+ أوردر',
      discount: '30%',
      savings: 'وفر 36 جنيه/أوردر',
      bonus: 'عروض خاصة حصرية طول العام',
      color: 'from-red-600 to-orange-600',
      popular: false,
    },
  ];

  const regions = [
    { name: 'القاهرة / الجيزة', price: '120 جنيه' },
    { name: 'الإسكندرية (داخل)', price: '80 جنيه' },
    { name: 'الإسكندرية (خارج)', price: '60 جنيه' },
    { name: 'الدلتا والبحيرة وبورسعيد ودمياط والشرقية', price: '100 جنيه' },
    { name: 'الصعيد القريب (المنيا، بني سويف، الفيوم، أسيوط)', price: '150 جنيه' },
    { name: 'الصعيد البعيد (سوهاج، قنا، الأقصر، أسوان، البحر الأحمر)', price: '180 جنيه' },
    { name: 'المناطق الخاصة (شرم الشيخ، سيناء، الوادي الجديد)', price: '200 جنيه' },
  ];

  const policyPoints = [
    { title: 'شحن VIP السريع', text: 'نوفر خدمة الشحن السريع VIP لتوصيل الطلبات في نفس اليوم بأعلى مستوى من السرعة والكفاءة.' },
    { title: 'مدة التوصيل للوجه البحري', text: 'مدة التوصيل داخل الوجه البحري تصل إلى 72 ساعة عمل كحد أقصى.' },
    { title: 'مدة التوصيل للوجه القبلي', text: 'مدة التوصيل داخل الوجه القبلي من 3 إلى 5 أيام عمل حسب المحافظة وخط السير.' },
    { title: 'وسائل الدفع المتنوعة', text: 'نوفر وسائل دفع متعددة تشمل الدفع النقدي، إنستا باي (InstaPay)، والمحافظ الإلكترونية لتسهيل التحصيل.' },
    { title: 'سياسة التغليف والأمان', text: 'الشحنات القابلة للكسر يجب تغليفها بأمان، وتختلف تكلفة التغليف المخصص حسب نوع المنتج لضمان الحماية أثناء النقل.' },
    { title: 'عقود مرنة للشركات والمصانع', text: 'أنظمة تعاقد مرنة للشركات والمصانع والمتاجر الإلكترونية بأسعار تنافسية ومميزات حصرية تبدأ من 200 أوردر شهرياً.' },
  ];

  const teamFeatures = [
    'الالتزام الكامل بمواعيد الاستلام والتسليم بكل دقة واحترافية',
    'التعامل الراقي والمحترم مع العملاء لضمان أفضل تجربة خدمة',
    'سرعة في توصيل الشحنات مع الحفاظ التام على سلامتها أثناء النقل',
    'خبرة عريضة في التعامل مع مختلف أنواع الشحنات والبضائع',
    'متابعة مستمرة لحالة الأوردرات لحظة بلحظة حتى تمام التسليم',
    'معرفة جيدة وتامة بخطوط السير والمناطق لتقليل وقت التوصيل',
    'الالتزام بتحصيل المبالغ وتسليمها بكل أمان ومصداقية وشفافية',
    'جاهزية كاملة للعمل تحت ضغط وتنفيذ أكبر عدد من الطلبات بكفاءة',
    'الحرص على سمعة شركائنا وتقديم صورة مشرفة أمام عملائهم',
    'فريق من المندوبين المدربين على أعلى مستوى لضمان جودة الأداء',
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-red-500 selection:text-white">
      {/* Background Animated Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-red-500/15 via-amber-400/10 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 -right-20 w-[30rem] h-[30rem] bg-gradient-to-bl from-amber-400/15 via-red-500/10 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white shadow-md shadow-red-500/30">
              <Package className="w-7 h-7" />
            </div>
            <div>
              <div className="text-2xl font-black text-gradient leading-none">النمر للشحن</div>
              <div className="text-xs font-bold text-amber-600 tracking-wider">EL NMR SHIPPING</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-bold text-sm text-slate-700">
            <a href="#about" className="hover:text-red-600 transition-colors">من نحن</a>
            <a href="#features" className="hover:text-red-600 transition-colors">المميزات</a>
            <a href="#pricing" className="hover:text-red-600 transition-colors">الأسعار والباقات</a>
            <a href="#calculator" className="hover:text-red-600 transition-colors">حاسبة الشحن</a>
            <a href="#policy" className="hover:text-red-600 transition-colors">السياسات</a>
            <a href="#storage" className="hover:text-red-600 transition-colors">المخازن</a>
            <a href="#contact" className="hover:text-red-600 transition-colors">تواصل معنا</a>
          </nav>

          <a
            href="https://wa.me/201130491212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl hover:shadow-lg hover:shadow-red-500/30 transition-all hover:scale-105"
          >
            <Phone className="w-4 h-4" />
            <span>طلب مندوب</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-12 pb-24 px-4 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            {/* Left/Right Text in RTL */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 text-right"
            >
              <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border-amber-300/40">
                <Sparkles className="w-5 h-5 text-amber-500 animate-spin" />
                <span className="text-sm font-bold text-slate-800">
                  حلول لوجستية متكاملة لجميع المحافظات
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight mb-6">
                شحنتك في أمان مع <br />
                <span className="text-gradient">شركة النمر للشحن</span>
              </h1>

              {/* Exact Page 1 Content included verbatim */}
              <div className="glass rounded-3xl p-6 sm:p-8 mb-8 border-white/60 shadow-xl">
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed font-semibold">
                  شركة النمر للشحن هي شركة متخصصة في تقديم خدمات لوجستية متكاملة تهدف إلى تسهيل عمليات الشحن والتوصيل للأفراد وأصحاب الأعمال بكفاءة عالية. نعتمد على منظومة تشغيل حديثة تضمن السرعة في التنفيذ والدقة في الأداء مع تغطية شاملة لمختلف المناطق.
                </p>
                <div className="my-4 border-t border-slate-200/60" />
                <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                  نوفر تجربة خدمة متكاملة تشمل تتبع الشحنات بشكل لحظي وإدارة إلكترونية سهلة ومرنة إلى جانب حلول تحصيل آمنة وسريعة. كما نعمل على تقديم باقات تعاقد متنوعة تناسب احتياجات الأنشطة التجارية المختلفة. تلتزم شركة النمر للشحن بمعايير الجودة والاحترافية في جميع مراحل الخدمة، مع التركيز على التطوير المستمر لتلبية متطلبات السوق وتحقيق أعلى مستويات رضا العملاء.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#calculator"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-lg shadow-xl shadow-red-500/25 hover-lift"
                >
                  <Calculator className="w-5 h-5" />
                  احسب تكلفة شحنتك
                </a>
                <a
                  href="#pricing"
                  className="flex items-center gap-2 px-8 py-4 rounded-2xl glass font-black text-lg text-slate-800 hover-lift"
                >
                  استعراض الباقات والخصومات
                  <ArrowRight className="w-5 h-5 rotate-180" />
                </a>
              </div>

              {/* Quick trust metrics */}
              <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-200/80">
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-red-600">72h</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-600">حد أقصى بحري</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-amber-500">30%</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-600">خصومات باقات VIP</div>
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-black text-slate-900">100%</div>
                  <div className="text-xs sm:text-sm font-bold text-slate-600">سجل وبطاقة ضريبية</div>
                </div>
              </div>
            </motion.div>

            {/* Right Interactive 3D Card / Tracking Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-5"
            >
              <div className="relative">
                {/* Floating Truck Badge */}
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -top-6 -right-6 z-20 glass rounded-2xl p-4 shadow-xl flex items-center gap-3 border-amber-400/40"
                >
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-600 flex items-center justify-center font-bold">
                    <Truck className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-bold">خدمة خاصة</div>
                    <div className="text-sm font-black text-slate-900">شحن VIP نفس اليوم</div>
                  </div>
                </motion.div>

                {/* Main Glass Visual Box */}
                <div className="glass rounded-3xl p-8 shadow-2xl relative z-10 border-white/80 overflow-hidden">
                  <div className="w-full h-2 bg-gradient-to-r from-red-600 via-amber-500 to-red-600 -mt-8 -mx-8 mb-6" />

                  {/* Logo Centerpiece */}
                  <div className="text-center py-6">
                    <motion.div
                      animate={{ rotateY: [0, 360] }}
                      transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                      className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-red-600 to-amber-500 p-1 shadow-2xl shadow-red-500/40 flex items-center justify-center mb-4"
                    >
                      <div className="w-full h-full bg-white/90 rounded-[22px] flex items-center justify-center">
                        <Package className="w-12 h-12 text-red-600" />
                      </div>
                    </motion.div>
                    <h3 className="text-3xl font-black text-slate-900">شركة النمر للشحن</h3>
                    <p className="text-sm font-bold text-amber-600 mt-1">السرعة • الأمان • الاحترافية</p>
                  </div>

                  {/* Live Tracking Input Demo */}
                  <form onSubmit={handleTrack} className="mt-4 space-y-3">
                    <label className="block text-xs font-black text-slate-700">تتبع شحنتك لحظة بلحظة</label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        placeholder="أدخل كود الشحنة (مثال: NMR-8942)"
                        value={trackingCode}
                        onChange={(e) => setTrackingCode(e.target.value)}
                        className="flex-1 bg-white/80 border border-slate-300 rounded-xl px-4 py-3 text-sm font-bold focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                      <button
                        type="submit"
                        className="bg-red-600 hover:bg-red-700 text-white px-5 rounded-xl font-bold text-sm flex items-center justify-center transition-all shadow-md shadow-red-600/30"
                      >
                        <Search className="w-4 h-4" />
                      </button>
                    </div>
                  </form>

                  {/* Tracking Result Mockup */}
                  <AnimatePresence>
                    {trackingResult && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 p-4 rounded-2xl bg-white/90 border border-emerald-500/30"
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-bold text-slate-500">كود: {trackingResult.id}</span>
                          <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full flex items-center gap-1">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                            {trackingResult.status}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 mb-2 overflow-hidden">
                          <div className="bg-gradient-to-r from-amber-500 to-emerald-500 h-2 rounded-full w-3/4" />
                        </div>
                        <div className="text-xs text-slate-600 flex justify-between font-bold">
                          <span>المقر بالإسكندرية</span>
                          <span>المندوب في الطريق</span>
                          <span>تم التسليم</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Interactive Shipping Cost Calculator */}
      <section id="calculator" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-600">
              <Calculator className="w-4 h-4" />
              حاسبة الباقات التفاعلية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              احسب تكلفة شحن أوردراتك مع الخصم
            </h2>
            <p className="text-slate-600 text-lg mt-2">
              كلما زادت عدد أوردراتك الشهرية، زادت نسبة خصمك حتى 30%!
            </p>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl border-white/80">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Controls */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-black text-slate-800 mb-2">
                    ١. اختر المنطقة الجغرافية
                  </label>
                  <select
                    value={calcRegion}
                    onChange={(e) => setCalcRegion(e.target.value)}
                    className="w-full bg-white border border-slate-300 rounded-2xl p-4 font-bold text-slate-800 focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                  >
                    {Object.entries(regionPrices).map(([key, val]) => (
                      <option key={key} value={key}>
                        {val.name} ({val.base} جنيه)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-black text-slate-800">
                      ٢. عدد الأوردرات المتوقعة
                    </label>
                    <span className="text-2xl font-black text-red-600">{calcOrders} أوردر</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="250"
                    step="5"
                    value={calcOrders}
                    onChange={(e) => setCalcOrders(Number(e.target.value))}
                    className="w-full h-3 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-500 mt-1">
                    <span>10 أوردر</span>
                    <span>40 أوردر</span>
                    <span>80 أوردر</span>
                    <span>150+ أوردر</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-center gap-3">
                  <Award className="w-8 h-8 text-amber-600 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-amber-900 text-sm">الباقة المؤهلة: {currentDiscount.name}</div>
                    <div className="text-xs text-amber-700">نسبة الخصم المطبقة: {currentDiscount.pct}% على كل شحنة</div>
                  </div>
                </div>
              </div>

              {/* Live Cost Output */}
              <div className="glass-dark rounded-3xl p-8 text-white text-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl" />
                <div className="text-sm font-bold text-slate-400 mb-2">التكلفة بعد الخصم المباشر</div>
                <div className="text-5xl sm:text-6xl font-black text-gradient my-3">
                  {finalCost.toLocaleString()} <span className="text-2xl font-bold text-white">جنيه</span>
                </div>

                <div className="space-y-2 mt-6 pt-6 border-t border-slate-700 text-sm">
                  <div className="flex justify-between text-slate-400 font-bold">
                    <span>التكلفة الأساسية بدون باقة:</span>
                    <span className="line-through">{baseCost.toLocaleString()} جنيه</span>
                  </div>
                  <div className="flex justify-between text-emerald-400 font-bold text-base">
                    <span>إجمالي ما توفره مع النمر:</span>
                    <span>{savedAmount.toLocaleString()} جنيه ({currentDiscount.pct}%)</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/201130491212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-lg shadow-xl shadow-red-600/40 hover:scale-105 transition-all"
                >
                  تعاقد على هذه الباقة الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose El NMR Section */}
      <section id="features" className="py-20 px-4 bg-gradient-to-b from-transparent via-red-50/40 to-transparent relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-600">
              <Star className="w-4 h-4 fill-current" />
              أفضل جودة وخدمة
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              لماذا تختار النمر للشحن؟
            </h2>
            <p className="text-slate-600 text-lg mt-2 max-w-2xl mx-auto">
              حلول شحن متكاملة تجمع بين السرعة، الأمان، والاحترافية لتنمية أعمالك بثقة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="glass rounded-3xl p-6 shadow-xl border-white/80 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-5 shadow-lg shadow-red-500/20`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed font-semibold">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section id="pricing" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-600">
              <Percent className="w-4 h-4" />
              باقات الشحن الشهرية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              باقات الشحن حسب عدد الأوردرات
            </h2>
            <p className="text-slate-600 text-lg mt-2">
              خصومات حصرية وتوفير حقيقي مع كل شحنة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.03 }}
                className={`glass rounded-3xl p-6 relative flex flex-col justify-between shadow-xl border-white/80 ${
                  tier.popular ? 'ring-4 ring-red-500/50 shadow-2xl bg-gradient-to-b from-white to-red-50/50' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 right-6 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-md">
                    الأكثر طلباً للتجار
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold text-slate-500 mb-1">{tier.orders}</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">{tier.name}</h3>

                  <div className="text-4xl font-black text-gradient mb-2">{tier.discount}</div>
                  <div className="text-sm font-bold text-emerald-600 mb-4">{tier.savings}</div>

                  {tier.bonus && (
                    <div className="bg-amber-100/60 border border-amber-300/40 rounded-xl p-2.5 text-xs font-bold text-amber-900 mb-4">
                      🎁 {tier.bonus}
                    </div>
                  )}
                </div>

                <a
                  href="https://wa.me/201130491212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl bg-slate-900 hover:bg-red-600 text-white text-sm font-black transition-colors"
                >
                  اختيار الباقة
                </a>
              </motion.div>
            ))}
          </div>

          {/* Region Shipping Rates Table */}
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl border-white/80">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-black text-slate-900">أسعار الشحن حسب المناطق والمحافظات</h3>
                <p className="text-slate-600 font-bold mt-1">أسعار واضحة ومحددة بدون أي رسوم خفية</p>
              </div>
              <div className="text-xs font-black bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-xl">
                تطبق الخصومات الإضافية للباقات
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {regions.map((reg, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/80 border border-slate-200/80 flex justify-between items-center hover:border-amber-400 transition-colors shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span className="font-bold text-slate-800 text-sm">{reg.name}</span>
                  </div>
                  <span className="font-black text-amber-600 text-base">{reg.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pages 2-3 Policies & Handling Section */}
      <section id="policy" className="py-20 px-4 bg-slate-100/60 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-600">
              <Shield className="w-4 h-4" />
              الشفافية والمصداقية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              سياسة الشحن والتعامل
            </h2>
            <p className="text-slate-600 text-lg mt-2 max-w-2xl mx-auto font-semibold">
              تعتمد أسعار الشحن على المسافة، نوع الشحنة، والتغيرات الخاصة بأسعار الوقود
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {policyPoints.map((item, idx) => (
              <div key={idx} className="glass rounded-3xl p-6 shadow-xl border-white/80">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/10 text-red-600 flex items-center justify-center font-black">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-black text-slate-900">{item.title}</h3>
                </div>
                <p className="text-sm font-bold text-slate-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Customer support callout */}
          <div className="glass rounded-3xl p-8 border-red-300/40 text-center max-w-3xl mx-auto bg-gradient-to-r from-red-50/60 to-amber-50/60">
            <p className="text-base sm:text-lg font-bold text-slate-800 leading-relaxed">
              تحرص الشركة على تقديم أفضل مستوى خدمة، وفي حال وجود أي ملاحظات أو شكاوى يمكن التواصل مباشرة مع الإدارة أو خدمة العملاء عبر الأرقام الرسمية لتسوية أي طلب فوراً.
            </p>
          </div>
        </div>
      </section>

      {/* Couriers / Team Advantages */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-600">
              <Users className="w-4 h-4" />
              سفراء علامتك التجارية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-slate-900">
              مميزات العمل مع مندوبينا
            </h2>
            <p className="text-slate-600 text-lg mt-2">
              مندوبونا مدربون ليكونوا واجهة مشرفة لمتجرك أمام عملائك
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {teamFeatures.map((feat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: -4 }}
                className="glass rounded-2xl p-5 flex items-start gap-3 shadow-md border-white/80"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-bold text-slate-700 text-sm leading-relaxed">{feat}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage and Warehouses */}
      <section id="storage" className="py-20 px-4 bg-gradient-to-b from-transparent via-amber-50/40 to-transparent relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-14 shadow-2xl border-white/80 relative overflow-hidden">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-900 px-3.5 py-1.5 rounded-full text-xs font-black mb-4">
                  <Warehouse className="w-4 h-4 text-amber-700" />
                  مساحات تخزين مرنة
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-4">
                  خدمات التخزين والمخازن الاحترافية
                </h2>
                <p className="text-slate-700 font-bold leading-relaxed mb-6">
                  نوفر خدمات تخزين آمنة ومجهزة بالكامل لتناسب احتياجات الشركات والمتاجر الإلكترونية، مع الحفاظ على المنتجات بأعلى درجات الأمان والتنظيم.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm font-bold text-slate-600">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>مخازن مؤمنة ومجهزة لاستقبال مختلف أنواع البضائع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>تنظيم وتخزين احترافي لسهولة الجرد والمتابعة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>تخزين لفترات قصيرة أو طويلة حسب الاحتياج</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0" />
                    <span>تجهيز وشحن الطلبات مباشرة من المخزن للعميل</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="glass-dark rounded-3xl p-8 text-white shadow-xl">
                  <div className="text-xs font-bold text-slate-400 mb-1">أسعار تنافسية تبدأ من</div>
                  <div className="text-5xl font-black text-gradient my-2">300</div>
                  <div className="text-lg font-bold text-amber-400 mb-4">جنيه للمتر شهرياً</div>
                  <a
                    href="https://wa.me/201130491212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-black text-sm transition-colors"
                  >
                    حجز مساحة تخزين
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate VIP Contracts & Official Registration */}
      <section className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* VIP Corporate */}
            <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl border-white/80">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-red-600/30">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-3">
                عروض VIP للشركات والمصانع
              </h3>
              <p className="text-slate-600 font-bold mb-6">
                نوفر باقات وعروض خاصة للشركات والمصانع وأصحاب المتاجر الإلكترونية مع أفضل أسعار الشحن والخدمات اللوجستية المميزة.
              </p>
              <div className="space-y-3 bg-white/70 rounded-2xl p-5 border border-slate-200">
                <div className="flex justify-between items-center font-bold">
                  <span>التعاقد الشهري:</span>
                  <span className="text-red-600">أكثر من 200 أوردر</span>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <span>سعر الوجه البحري للشركات:</span>
                  <span className="text-emerald-600 text-lg font-black">100 جنيه</span>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <span>سعر الوجه القبلي للشركات:</span>
                  <span className="text-emerald-600 text-lg font-black">120 جنيه</span>
                </div>
                <div className="text-xs text-slate-500 pt-2 border-t border-slate-200 font-bold">
                  * الحد الأقصى للوزن الأساسي 2 كجم، وكل كجم إضافي 10 جنيهات فقط.
                </div>
              </div>
            </div>

            {/* Official Trust */}
            <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl border-white/80">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-emerald-600/30">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-slate-900 mb-3">
                ثقة واعتماد رسمي وقانوني
              </h3>
              <p className="text-slate-700 font-bold leading-relaxed mb-6">
                نحن نعمل وفق إطار قانوني معتمد يشمل سجل تجاري وبطاقة ضريبية، مع وجود مقر إداري ومخازن مجهزة، بالإضافة إلى نظام إدارة متكامل يضمن تنظيم جميع العمليات بدقة واحترافية.
              </p>
              <div className="p-5 rounded-2xl bg-emerald-50/70 border border-emerald-200 text-emerald-900 text-sm font-bold leading-relaxed">
                هذا يضمن لعملائنا التعامل مع جهة موثوقة تعمل بشكل رسمي وآمن، وتقدم خدماتها وفق أعلى معايير التنظيم والشفافية. نضع ثقة العميل وأمان شحناته في المقام الأول.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-900 text-white relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gradient mb-3">
              تواصل مع شركة النمر للشحن
            </h2>
            <p className="text-slate-400 text-lg font-bold">
              يسعدنا الرد على استفساراتكم والبدء في شحن وتوصيل منتجاتكم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            {/* Phones */}
            <div className="glass-dark rounded-3xl p-8 text-center border-slate-700">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3">أرقام الهواتف</h3>
              <div className="space-y-1 font-bold text-slate-300 dir-ltr text-lg">
                <div>01130491212</div>
                <div>01119383101</div>
                <div>01553999935</div>
                <div>0359380077</div>
              </div>
            </div>

            {/* Emails */}
            <div className="glass-dark rounded-3xl p-8 text-center border-slate-700">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center mx-auto mb-4">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3">البريد الإلكتروني</h3>
              <div className="space-y-2 font-bold text-slate-300 text-sm">
                <div>online@elnmrshipping.com</div>
                <div>logistics@elnmrshipping.com.eg</div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-dark rounded-3xl p-8 text-center border-slate-700">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3">المقر الإداري</h3>
              <p className="font-bold text-slate-300 text-base">
                جمهورية مصر العربية <br />
                الإسكندرية - الإبراهيمية
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-800 text-slate-500 text-sm font-bold">
            © 2026 شركة النمر للشحن (EL NMR SHIPPING) - جميع الحقوق محفوظة.
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/201130491212"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all animate-glow"
      >
        <Phone className="w-8 h-8 fill-current" />
      </a>
    </main>
  );
}
