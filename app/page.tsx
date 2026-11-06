'use client';

import { motion } from 'framer-motion';
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
  Sparkles,
  Percent,
  Check,
  Send,
  Plane,
  Box,
  Compass
} from 'lucide-react';
import { useState } from 'react';

export default function Home() {
  const [calcRegion, setCalcRegion] = useState('cairo');
  const [calcOrders, setCalcOrders] = useState(25);

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

  const features = [
    {
      icon: MapPin,
      title: 'متابعة دقيقة للشحنات',
      description: 'متابعة دقيقة للشحنات لحظة بلحظة لضمان وصولها بأمان وفي الوقت المحدد.',
      color: 'from-red-600 to-rose-500',
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
      color: 'from-red-600 to-orange-500',
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
      color: 'from-orange-500 to-red-600',
    },
  ];

  const pricingTiers = [
    {
      name: 'باقة البداية',
      orders: 'من 10 إلى 19 أوردر',
      discount: '10%',
      savings: 'وفر 12 جنيه/أوردر',
      color: 'from-red-600 to-pink-500',
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
      color: 'from-red-600 to-rose-600',
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
    <div className="min-h-screen bg-[#030712] text-slate-100 selection:bg-red-600 selection:text-white font-tinta overflow-x-hidden relative" dir="rtl">
      {/* Background Moving Glow Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{ scale: [1, 1.3, 1], x: [0, 80, 0], y: [0, -50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -top-32 -left-32 w-[35rem] h-[35rem] bg-gradient-to-br from-red-600/20 via-rose-600/10 to-transparent rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1.3, 1, 1.3], x: [0, -80, 0], y: [0, 80, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/3 -right-32 w-[40rem] h-[40rem] bg-gradient-to-bl from-amber-500/20 via-yellow-600/10 to-transparent rounded-full blur-[140px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 60, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -bottom-32 left-1/3 w-[35rem] h-[35rem] bg-gradient-to-tr from-red-600/15 via-amber-500/15 to-transparent rounded-full blur-[130px]"
        />
      </div>

      {/* Floating 3D Background Icons */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden opacity-35">
        <motion.div animate={{ y: [-30, 30, -30], rotate: [0, 15, 0], x: [-10, 10, -10] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-28 left-12 text-red-500">
          <Truck className="w-20 h-20" />
        </motion.div>
        <motion.div animate={{ y: [30, -30, 30], rotate: [0, -20, 0], x: [10, -10, 10] }} transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/3 right-16 text-amber-400">
          <Package className="w-24 h-24" />
        </motion.div>
        <motion.div animate={{ y: [-25, 25, -25], rotate: [0, 25, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-1/4 left-24 text-rose-500">
          <MapPin className="w-16 h-16" />
        </motion.div>
        <motion.div animate={{ y: [20, -20, 20], rotate: [0, -15, 0] }} transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-2/3 right-32 text-yellow-500">
          <Plane className="w-18 h-18" />
        </motion.div>
        <motion.div animate={{ y: [-15, 25, -15], rotate: [0, 30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }} className="absolute bottom-10 right-1/4 text-red-400">
          <Box className="w-16 h-16" />
        </motion.div>
        <motion.div animate={{ y: [20, -15, 20], rotate: [0, -25, 0] }} transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }} className="absolute top-1/4 left-1/3 text-amber-500">
          <Compass className="w-16 h-16" />
        </motion.div>
      </div>

      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3">
        <div className="max-w-7xl mx-auto glass rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-2xl border border-white/10 backdrop-blur-2xl">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.8 }}
              className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-amber-500 flex items-center justify-center text-white shadow-lg glow-red"
            >
              <Package className="w-7 h-7" />
            </motion.div>
            <div>
              <div className="text-2xl font-black font-mustopha text-gradient leading-none">النمر للشحن</div>
              <div className="text-xs font-bold text-amber-400 tracking-wider font-lemon">EL NMR SHIPPING</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 font-bold text-sm text-slate-300 font-tinta">
            <a href="#about" className="hover:text-red-400 transition-colors">من نحن</a>
            <a href="#features" className="hover:text-red-400 transition-colors">المميزات</a>
            <a href="#pricing" className="hover:text-red-400 transition-colors">الأسعار والباقات</a>
            <a href="#calculator" className="hover:text-red-400 transition-colors">حاسبة الشحن</a>
            <a href="#policy" className="hover:text-red-400 transition-colors">السياسات</a>
            <a href="#storage" className="hover:text-red-400 transition-colors">المخازن</a>
            <a href="#contact" className="hover:text-red-400 transition-colors">تواصل معنا</a>
          </nav>

          <a
            href="https://wa.me/201130491212"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gradient-to-r from-red-600 to-amber-500 text-white font-bold text-sm px-5 py-2.5 rounded-xl glow-red hover:scale-105 transition-all font-tinta"
          >
            <Phone className="w-4 h-4" />
            <span>طلب مندوب</span>
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-32 pb-28 px-4 z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 text-right"
          >
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6 border border-amber-500/30 shadow-lg font-lemon">
              <Sparkles className="w-5 h-5 text-amber-400 animate-spin" />
              <span className="text-sm font-bold text-amber-200">
                حلول لوجستية متكاملة لجميع المحافظات بأعلى معايير الاحترافية
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black font-mustopha leading-tight mb-6 text-white">
              شحنتك في أمان تام مع <br />
              <span className="text-gradient drop-shadow-md">شركة النمر للشحن</span>
            </h1>

            {/* Exact Page 1 Content Box */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-3xl p-8 mb-8 border border-white/20 shadow-2xl glow-red relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 w-full h-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-bold font-mustopha pt-2">
                شركة النمر للشحن هي شركة متخصصة في تقديم خدمات لوجستية متكاملة تهدف إلى تسهيل عمليات الشحن والتوصيل للأفراد وأصحاب الأعمال بكفاءة عالية. نعتمد على منظومة تشغيل حديثة تضمن السرعة في التنفيذ والدقة في الأداء مع تغطية شاملة لمختلف المناطق.
              </p>
              <div className="my-5 border-t border-slate-700/80" />
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-tinta">
                نوفر تجربة خدمة متكاملة تشمل تتبع الشحنات بشكل لحظي وإدارة إلكترونية سهلة ومرنة إلى جانب حلول تحصيل آمنة وسريعة. كما نعمل على تقديم باقات تعاقد متنوعة تناسب احتياجات الأنشطة التجارية المختلفة. تلتزم شركة النمر للشحن بمعايير الجودة والاحترافية في جميع مراحل الخدمة، مع التركيز على التطوير المستمر لتلبية متطلبات السوق وتحقيق أعلى مستويات رضا العملاء.
              </p>
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 font-tinta">
              <a
                href="#calculator"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-lg glow-red hover:scale-105 transition-transform"
              >
                <Calculator className="w-5 h-5" />
                احسب تكلفة شحنتك الآن
              </a>
              <a
                href="#pricing"
                className="flex items-center gap-2 px-8 py-4 rounded-2xl glass font-black text-lg text-slate-200 hover:scale-105 transition-transform border border-white/10"
              >
                استعراض الباقات والخصومات
                <ArrowRight className="w-5 h-5 rotate-180" />
              </a>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-10 pt-8 border-t border-slate-800 font-tinta">
              <div>
                <div className="text-3xl sm:text-4xl font-black text-red-500 font-mustopha">72h</div>
                <div className="text-xs sm:text-sm font-bold text-slate-400">حد أقصى للوجه البحري</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-amber-400 font-mustopha">30%</div>
                <div className="text-xs sm:text-sm font-bold text-slate-400">خصومات باقات VIP</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-black text-white font-mustopha">100%</div>
                <div className="text-xs sm:text-sm font-bold text-slate-400">سجل تجاري وبطاقة ضريبية</div>
              </div>
            </div>
          </motion.div>

          {/* Right Card / Interactive Service Request Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative pt-6">
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-2 left-1/2 -translate-x-1/2 z-20 glass rounded-2xl px-6 py-3 shadow-2xl flex items-center gap-3 border border-amber-500/40 glow-gold whitespace-nowrap font-lemon"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold">
                  <Truck className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-bold">خدمة فائقة السرعة</div>
                  <div className="text-xs sm:text-sm font-black text-white">شحن VIP نفس اليوم</div>
                </div>
              </motion.div>

              <div className="glass rounded-3xl p-8 shadow-2xl relative z-10 border border-white/20 glow-red overflow-hidden mt-4">
                <div className="absolute top-0 left-0 right-0 w-full h-2.5 bg-gradient-to-r from-red-600 via-amber-500 to-red-600" />

                <div className="text-center pt-4 pb-6">
                  <div className="w-24 h-24 mx-auto rounded-3xl bg-gradient-to-tr from-red-600 to-amber-500 p-1 shadow-2xl glow-red flex items-center justify-center mb-4">
                    <div className="w-full h-full bg-slate-900 rounded-[22px] flex items-center justify-center">
                      <Package className="w-12 h-12 text-red-500" />
                    </div>
                  </div>
                  <h3 className="text-3xl font-black text-white font-mustopha">شركة النمر للشحن</h3>
                  <p className="text-sm font-bold text-amber-400 mt-1 font-lemon">شريكك اللوجستي الأول في مصر</p>
                </div>

                <div className="mt-2 space-y-4 bg-slate-900/70 p-6 rounded-2xl border border-white/10 font-tinta">
                  <h4 className="text-base font-bold text-white text-center font-mustopha">طلب استلام شحنة سريعة</h4>
                  <p className="text-xs text-slate-300 text-center leading-relaxed">تواصل معنا مباشرة عبر واتساب لتحديد موعد استلام شحنتك خلال دقائق بكل سهولة ويسر</p>
                  <a
                    href="https://wa.me/201130491212?text=مرحباً، أرغب في طلب مندوب لاستلام شحنة جديدة من شركة النمر للشحن."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full text-center py-4 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-black text-base shadow-xl glow-gold hover:scale-105 transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    <span>تواصل مع خدمة العملاء (واتساب)</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Interactive Shipping Cost Calculator */}
      <section id="calculator" className="py-20 px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-400 shadow-lg border border-red-500/30 font-lemon">
              <Calculator className="w-4 h-4" />
              حاسبة الباقات التفاعلية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-mustopha">
              احسب تكلفة شحن أوردراتك مع الخصم
            </h2>
            <p className="text-slate-300 text-lg mt-2 font-semibold font-tinta">
              كلما زادت عدد أوردراتك الشهرية، زادت نسبة خصمك حتى 30%!
            </p>
          </div>

          <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 glow-red">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6 font-tinta">
                <div>
                  <label className="block text-sm font-black text-slate-200 mb-2">
                    ١. اختر المنطقة الجغرافية
                  </label>
                  <select
                    value={calcRegion}
                    onChange={(e) => setCalcRegion(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-2xl p-4 font-bold text-white focus:outline-none focus:ring-2 focus:ring-red-500 shadow-sm"
                  >
                    {Object.entries(regionPrices).map(([key, val]) => (
                      <option key={key} value={key} className="bg-slate-900 text-white">
                        {val.name} ({val.base} جنيه)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-black text-slate-200">
                      ٢. عدد الأوردرات المتوقعة
                    </label>
                    <span className="text-2xl font-black text-red-500 font-mustopha">{calcOrders} أوردر</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="250"
                    step="5"
                    value={calcOrders}
                    onChange={(e) => setCalcOrders(Number(e.target.value))}
                    className="w-full h-3 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-red-600"
                  />
                  <div className="flex justify-between text-xs font-bold text-slate-400 mt-1">
                    <span>10 أوردر</span>
                    <span>40 أوردر</span>
                    <span>80 أوردر</span>
                    <span>150+ أوردر</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-3 shadow-sm">
                  <Award className="w-8 h-8 text-amber-400 flex-shrink-0" />
                  <div>
                    <div className="font-bold text-amber-300 text-sm">الباقة المؤهلة: {currentDiscount.name}</div>
                    <div className="text-xs text-amber-400/80">نسبة الخصم المطبقة: {currentDiscount.pct}% على كل شحنة</div>
                  </div>
                </div>
              </div>

              {/* Calculator Output with Stacked Vertical Rows and Thicker Bold Text */}
              <div className="bg-slate-900 text-white rounded-3xl p-8 text-center relative overflow-hidden shadow-2xl border border-white/10 glow-gold font-tinta">
                <div className="text-sm font-black text-slate-300 mb-2 tracking-wide font-lemon">التكلفة بعد الخصم المباشر</div>
                <div className="text-5xl sm:text-6xl font-black text-amber-400 my-4 font-mustopha tracking-tight">
                  {finalCost.toLocaleString()} <span className="text-2xl font-black text-white">جنيه</span>
                </div>

                <div className="space-y-4 mt-6 pt-6 border-t border-slate-800 text-sm font-black">
                  <div className="flex justify-between items-center text-slate-300 pb-3 border-b border-slate-800">
                    <span>التكلفة الأساسية بدون باقة:</span>
                    <span className="line-through text-slate-400 text-base">{baseCost.toLocaleString()} جنيه</span>
                  </div>
                  <div className="flex justify-between items-center text-emerald-400 text-base pb-2">
                    <span>إجمالي ما توفره مع النمر:</span>
                    <span className="text-lg">{savedAmount.toLocaleString()} جنيه ({currentDiscount.pct}%)</span>
                  </div>
                </div>

                <a
                  href="https://wa.me/201130491212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 block w-full py-4 rounded-2xl bg-gradient-to-r from-red-600 to-amber-500 text-white font-black text-lg glow-red hover:scale-105 transition-all shadow-xl font-mustopha"
                >
                  تعاقد على هذه الباقة الآن
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose El NMR Section */}
      <section id="features" className="py-20 px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-400 shadow-lg border border-white/10 font-lemon">
              <Star className="w-4 h-4 fill-current text-amber-400" />
              أفضل جودة وخدمة
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-mustopha">
              لماذا تختار النمر للشحن؟
            </h2>
            <p className="text-slate-300 text-lg mt-2 max-w-2xl mx-auto font-semibold font-tinta">
              حلول شحن متكاملة تجمع بين السرعة، الأمان، والاحترافية لتنمية أعمالك بثقة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 font-tinta">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-3xl p-6 shadow-xl border border-white/10 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center mb-5 shadow-lg glow-red`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-black text-white mb-3 font-mustopha">{item.title}</h3>
                  <p className="text-slate-300 text-sm leading-relaxed font-semibold">{item.description}</p>
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
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-400 shadow-lg border border-white/10 font-lemon">
              <Percent className="w-4 h-4" />
              باقات الشحن الشهرية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-mustopha">
              باقات الشحن حسب عدد الأوردرات
            </h2>
            <p className="text-slate-300 text-lg mt-2 font-semibold font-tinta">
              خصومات حصرية وتوفير حقيقي مع كل شحنة
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-16 font-tinta">
            {pricingTiers.map((tier, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8, scale: 1.03 }}
                className={`glass rounded-3xl p-6 relative flex flex-col justify-between shadow-xl border border-white/15 ${
                  tier.popular ? 'ring-4 ring-red-500/60 shadow-2xl bg-gradient-to-b from-slate-900 to-red-950/40 glow-red' : ''
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-3.5 right-6 bg-red-600 text-white text-xs font-black px-3 py-1 rounded-full shadow-lg font-lemon">
                    الأكثر طلباً للتجار
                  </div>
                )}
                <div>
                  <div className="text-xs font-bold text-slate-400 mb-1">{tier.orders}</div>
                  <h3 className="text-2xl font-black text-white mb-4 font-mustopha">{tier.name}</h3>

                  <div className="text-4xl font-black text-red-500 mb-2 font-mustopha">{tier.discount}</div>
                  <div className="text-sm font-bold text-emerald-400 mb-4">{tier.savings}</div>

                  {tier.bonus && (
                    <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-2.5 text-xs font-bold text-amber-300 mb-4">
                      🎁 {tier.bonus}
                    </div>
                  )}
                </div>

                <a
                  href="https://wa.me/201130491212"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-2.5 rounded-xl bg-gradient-to-r from-red-600 to-amber-500 text-white text-sm font-black glow-red transition-all hover:scale-105 font-mustopha"
                >
                  اختيار الباقة
                </a>
              </motion.div>
            ))}
          </div>

          {/* Region Shipping Rates Table */}
          <div className="glass rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20 font-tinta">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="text-3xl font-black text-white font-mustopha">أسعار الشحن حسب المناطق والمحافظات</h3>
                <p className="text-slate-300 font-bold mt-1">أسعار واضحة ومحددة بدون أي رسوم خفية</p>
              </div>
              <div className="text-xs font-black bg-red-500/10 text-red-400 border border-red-500/30 px-4 py-2 rounded-xl shadow-sm font-lemon">
                تطبق الخصومات الإضافية للباقات
              </div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {regions.map((reg, idx) => {
                const isLastAndOdd = idx === regions.length - 1 && regions.length % 3 === 1;
                return (
                  <div
                    key={idx}
                    className={`p-4 rounded-2xl glass-light flex justify-between items-center hover:border-amber-400 transition-colors shadow-sm ${
                      isLastAndOdd ? 'sm:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-red-500 flex-shrink-0" />
                      <span className="font-bold text-slate-200 text-sm">{reg.name}</span>
                    </div>
                    <span className="font-black text-amber-400 text-base font-mustopha">{reg.price}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Pages 2-3 Policies & Handling Section */}
      <section id="policy" className="py-20 px-4 relative z-10 font-tinta">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-400 shadow-lg border border-white/10 font-lemon">
              <Shield className="w-4 h-4" />
              الشفافية والمصداقية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-mustopha">
              سياسة الشحن والتعامل
            </h2>
            <p className="text-slate-300 text-lg mt-2 max-w-2xl mx-auto font-semibold">
              تعتمد أسعار الشحن على المسافة، نوع الشحنة، والتغيرات الخاصة بأسعار الوقود
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {policyPoints.map((item, idx) => (
              <div key={idx} className="glass rounded-3xl p-6 shadow-xl border border-white/15">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center font-black font-mustopha">
                    {idx + 1}
                  </div>
                  <h3 className="text-lg font-black text-white font-mustopha">{item.title}</h3>
                </div>
                <p className="text-sm font-bold text-slate-300 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="glass rounded-3xl p-8 border border-white/20 text-center max-w-3xl mx-auto shadow-2xl glow-gold">
            <p className="text-base sm:text-lg font-bold text-slate-200 leading-relaxed">
              تحرص الشركة على تقديم أفضل مستوى خدمة، وفي حال وجود أي ملاحظات أو شكاوى يمكن التواصل مباشرة مع الإدارة أو خدمة العملاء عبر الأرقام الرسمية لتسوية أي طلب فوراً.
            </p>
          </div>
        </div>
      </section>

      {/* Couriers / Team Advantages */}
      <section className="py-20 px-4 relative z-10 font-tinta">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 glass px-4 py-1.5 rounded-full mb-3 text-sm font-bold text-red-400 shadow-lg border border-white/10 font-lemon">
              <Users className="w-4 h-4" />
              سفراء علامتك التجارية
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white font-mustopha">
              مميزات العمل مع مندوبينا
            </h2>
            <p className="text-slate-300 text-lg mt-2 font-semibold">
              مندوبونا مدربون ليكونوا واجهة مشرفة لمتجرك أمام عملائك
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {teamFeatures.map((feat, idx) => (
              <div
                key={idx}
                className="glass rounded-2xl p-5 flex items-start gap-3 shadow-md border border-white/10"
              >
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <span className="font-bold text-slate-200 text-sm leading-relaxed">{feat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Storage and Warehouses */}
      <section id="storage" className="py-20 px-4 relative z-10 font-tinta">
        <div className="max-w-6xl mx-auto">
          <div className="glass rounded-3xl p-8 sm:p-14 shadow-2xl border border-white/20 relative overflow-hidden glow-gold">
            <div className="grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-black mb-4 border border-amber-500/30 font-lemon">
                  <Warehouse className="w-4 h-4 text-amber-400" />
                  مساحات تخزين مرنة
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 font-mustopha">
                  خدمات التخزين والمخازن الاحترافية
                </h2>
                <p className="text-slate-300 font-bold leading-relaxed mb-6">
                  نوفر خدمات تخزين آمنة ومجهزة بالكامل لتناسب احتياجات الشركات والمتاجر الإلكترونية، مع الحفاظ على المنتجات بأعلى درجات الأمان والتنظيم.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 text-sm font-bold text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>مخازن مؤمنة ومجهزة لاستقبال مختلف أنواع البضائع</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>تنظيم وتخزين احترافي لسهولة الجرد والمتابعة</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>تخزين لفترات قصيرة أو طويلة حسب الاحتياج</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                    <span>تجهيز وشحن الطلبات مباشرة من المخزن للعميل</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center">
                <div className="bg-slate-900/90 rounded-3xl p-8 text-white shadow-2xl border border-white/20 glow-red">
                  <div className="text-xs font-bold text-slate-400 mb-1 font-lemon">أسعار تنافسية تبدأ من</div>
                  <div className="text-5xl font-black text-amber-400 my-2 font-mustopha">300</div>
                  <div className="text-lg font-bold text-amber-400 mb-4 font-lemon">جنيه للمتر شهرياً</div>
                  <a
                    href="https://wa.me/201130491212"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-900 font-black text-sm transition-colors shadow-lg font-mustopha"
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
      <section className="py-20 px-4 relative z-10 font-tinta">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-red-600 text-white flex items-center justify-center mb-6 shadow-lg glow-red">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-white mb-3 font-mustopha">
                عروض VIP للشركات والمصانع
              </h3>
              <p className="text-slate-300 font-bold mb-6">
                نوفر باقات وعروض خاصة للشركات والمصانع وأصحاب المتاجر الإلكترونية مع أفضل أسعار الشحن والخدمات اللوجستية المميزة.
              </p>
              <div className="space-y-3 bg-slate-900/70 rounded-2xl p-5 border border-white/10">
                <div className="flex justify-between items-center font-bold">
                  <span className="text-slate-300">التعاقد الشهري:</span>
                  <span className="text-red-400 font-black font-mustopha">أكثر من 200 أوردر</span>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <span className="text-slate-300">سعر الوجه البحري للشركات:</span>
                  <span className="text-emerald-400 text-lg font-black font-mustopha">100 جنيه</span>
                </div>
                <div className="flex justify-between items-center font-bold">
                  <span className="text-slate-300">سعر الوجه القبلي للشركات:</span>
                  <span className="text-emerald-400 text-lg font-black font-mustopha">120 جنيه</span>
                </div>
                <div className="text-xs text-slate-400 pt-2 border-t border-slate-800 font-bold">
                  * الحد الأقصى للوزن الأساسي 2 كجم، وكل كجم إضافي 10 جنيهات فقط.
                </div>
              </div>
            </div>

            <div className="glass rounded-3xl p-8 sm:p-10 shadow-xl border border-white/15">
              <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center mb-6 shadow-lg glow-gold">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="text-3xl font-black text-white mb-3 font-mustopha">
                ثقة واعتماد رسمي وقانوني
              </h3>
              <p className="text-slate-300 font-bold leading-relaxed mb-6">
                نحن نعمل وفق إطار قانوني معتمد يشمل سجل تجاري وبطاقة ضريبية، مع وجود مقر إداري ومخازن مجهزة، بالإضافة إلى نظام إدارة متكامل يضمن تنظيم جميع العمليات بدقة واحترافية.
              </p>
              <div className="p-5 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-bold leading-relaxed">
                هذا يضمن لعملائنا التعامل مع جهة موثوقة تعمل بشكل رسمي وآمن، وتقدم خدماتها وفق أعلى معايير التنظيم والشفافية. نضع ثقة العميل وأمان شحناته في المقام الأول.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-slate-950 text-white relative z-10 border-t border-slate-800 font-tinta">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-black text-gradient mb-3 font-mustopha">
              تواصل مع شركة النمر للشحن
            </h2>
            <p className="text-slate-400 text-lg font-bold">
              يسعدنا الرد على استفساراتكم والبدء في شحن وتوصيل منتجاتكم
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
            <div className="glass-light rounded-3xl p-8 text-center border border-white/10 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-amber-500 text-white flex items-center justify-center mx-auto mb-4 shadow-lg glow-red">
                <Phone className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 font-mustopha">أرقام الهواتف</h3>
              <div className="space-y-1 font-bold text-slate-300 dir-ltr text-lg">
                <div>01130491212</div>
                <div>01119383101</div>
                <div>01553999935</div>
                <div>0359380077</div>
              </div>
            </div>

            <div className="glass-light rounded-3xl p-8 text-center border border-white/10 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500 to-yellow-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg glow-gold">
                <Mail className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 font-mustopha">البريد الإلكتروني</h3>
              <div className="space-y-2 font-bold text-slate-300 text-sm">
                <div>online@elnmrshipping.com</div>
                <div>logistics@elnmrshipping.com.eg</div>
              </div>
            </div>

            <div className="glass-light rounded-3xl p-8 text-center border border-white/10 shadow-xl">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-black mb-3 font-mustopha">المقر الإداري</h3>
              <p className="font-bold text-slate-300 text-base">
                جمهورية مصر العربية <br />
                الإسكندرية - الإبراهيمية
              </p>
            </div>
          </div>

          <div className="text-center pt-8 border-t border-slate-900 text-slate-500 text-sm font-bold">
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
        className="fixed bottom-6 left-6 z-50 w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all glow-gold"
      >
        <Phone className="w-8 h-8 fill-current" />
      </a>
    </div>
  );
}
