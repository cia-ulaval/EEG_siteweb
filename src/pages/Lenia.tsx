import {
  Apple,
  Baby,
  Asterisk,
  Bean,
  Grid,
  ZoomIn,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import Head from "next/head";
import TeamMemberCard from "../components/TeamMemberCard";
import { useTranslation } from "next-i18next";

interface ImageWithGlowProps {
  src: string;
  alt: string;
  caption?: string;
}

const ImageWithGlow = ({ src, alt, caption }: ImageWithGlowProps) => (
  <motion.div
    className="text-center mb-8 relative overflow-hidden rounded-xl"
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.3 },
    }}
  >
    <motion.img
      src={src}
      alt={alt}
      className="w-full mx-auto rounded-xl shadow-xl border border-red-600/30"
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    />
    {caption && (
      <div className="text-sm text-gray-400 mt-3 italic">{caption}</div>
    )}
    <div className="absolute -inset-0.5 bg-gradient-to-r from-red-500/10 to-red-900/10 rounded-xl blur opacity-50"></div>
  </motion.div>
);

function Lenia() {
  const { t } = useTranslation();

  // Project features with icons
  const features = [
    {
      icon: <Grid className="w-6 h-6 text-red-400" />,
      title: t("lenia.features.continuous.title"),
      description: t("lenia.features.continuous.description"),
    },
    {
      icon: <Sparkles className="w-6 h-6 text-red-400" />,
      title: t("lenia.features.emergent.title"),
      description: t("lenia.features.emergent.description"),
    },
    {
      icon: <ZoomIn className="w-6 h-6 text-red-400" />,
      title: t("lenia.features.research.title"),
      description: t("lenia.features.research.description"),
    },
  ];

  const teamMembers = [
    {
      icon: <Apple className="w-8 h-8" />,
      title: "Théophile Berteloot",
      description: t("lenia.team.theophile.description"),
    },
    {
      icon: <Baby className="w-8 h-8" />,
      title: "Jordan Mathieu",
      description: t("lenia.team.jordan.description"),
    },
    {
      icon: <Bean className="w-8 h-8" />,
      title: "Louis-Étienne Messier",
      description: t("lenia.team.louis.description"),
    },
    {
      icon: <Asterisk className="w-8 h-8" />,
      title: t("lenia.team.others.title"),
      description: t("lenia.team.others.description"),
    },
  ];

  return (
    <>
      <Head>
        <title>{t("lenia.meta.title")}</title>
        <meta name="description" content={t("lenia.meta.description")} />
        <meta name="keywords" content={t("lenia.meta.keywords")} />
        <meta name="author" content="Dereck Bélanger" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={t("lenia.meta.og.title")} />
        <meta
          property="og:description"
          content={t("lenia.meta.og.description")}
        />
        <meta property="og:image" content="/banner/cia_ico.ico" />
        <meta property="og:url" content="https://cialaval.vercel.app/lenia" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={t("lenia.meta.twitter.title")} />
        <meta
          name="twitter:description"
          content={t("lenia.meta.twitter.description")}
        />
        <meta name="twitter:image" content="/banner/cia_ico.ico" />
      </Head>

      <section className="relative overflow-hidden">
        <motion.div
          className="container w-full md:w-11/12 lg:w-3/4 mx-auto px-4 md:px-6 py-8 md:py-16 rounded-lg md:rounded-2xl bg-gradient-to-br from-red-900/20 to-black/40 shadow-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section - Grid Layout */}
          <motion.section
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Text Content */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-5xl md:text-6xl font-bold mb-4">
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-400 to-red-600">
                      Lenia
                    </span>
                  </h1>
                  <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
                    {t("lenia.hero.subtitle")}
                  </h2>
                </div>

                {/* Feature badges */}
                <div className="flex flex-wrap gap-3">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-4 py-2 bg-red-900/20 rounded-full !border !border-red-900 hover:!border-red-500/70 transition-colors duration-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    >
                      {feature.icon}
                      <span className="text-sm font-medium text-white">
                        {feature.title}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Introduction Text */}
                <motion.p
                  className="text-lg text-gray-400 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {t("lenia.content.paragraph1")}
                </motion.p>
              </div>

              {/* Right Side - Hero Image */}
              <div className="flex justify-center lg:justify-end">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="w-full"
                >
                  <ImageWithGlow
                    src="/project/lenia.png"
                    alt={t("lenia.images.pattern.alt")}
                  />
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Content Section - Alternating Layout */}
          <motion.section
            className="mb-16 space-y-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* First Content Block */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-red-400">
                  {t("lenia.features.continuous.title")}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t("lenia.content.paragraph2")}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <ImageWithGlow
                  src="/project/leniaexample.gif"
                  alt={t("lenia.images.animation.alt")}
                  caption={t("lenia.images.animation.caption")}
                />
              </motion.div>
            </div>

            {/* Second Content Block - Reversed */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="lg:order-2 space-y-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-red-400">
                  {t("lenia.features.research.title")}
                </h3>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t("lenia.content.paragraph3")}
                </p>
                <p className="text-lg text-gray-400 leading-relaxed">
                  {t("lenia.content.paragraph4")}
                </p>
              </motion.div>

              <motion.div
                className="lg:order-1"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Placeholder for additional visual content */}
                <div className="bg-gradient-to-br from-red-900/10 to-black/20 rounded-xl p-8 border !border-red-900">
                  <div className="text-center space-y-4">
                    <Sparkles className="w-16 h-16 text-red-400 mx-auto" />
                    <h4 className="text-xl font-semibold text-white">
                      {t("lenia.features.emergent.title")}
                    </h4>
                    <p className="text-gray-400">
                      {t("lenia.features.emergent.description")}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.section>

          {/* Team Section */}
          <motion.section
            className="py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <motion.h2
                className="text-4xl font-bold gradient-text mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {t("lenia.team.title")}
              </motion.h2>
              <motion.p
                className="text-gray-400 text-lg max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                Meet the dedicated researchers exploring the fascinating world
                of artificial life
              </motion.p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-full px-2 mx-auto">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="w-56 flex-shrink-0"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <TeamMemberCard
                    icon={member.icon}
                    title={member.title}
                    description={member.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.section>
        </motion.div>
      </section>
    </>
  );
}

export default Lenia;
