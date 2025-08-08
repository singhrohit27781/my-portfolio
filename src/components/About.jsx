import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users, Award, Coffee } from 'lucide-react';

const About = () => {
  const skills = [
    {
      category: 'Frontend',
      technologies: ['React', 'Vue.js', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Backend',
      technologies: ['Node.js', 'Python', 'Express', 'Django', 'PostgreSQL', 'MongoDB'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      category: 'Tools & Others',
      technologies: ['Git', 'Docker', 'AWS', 'Figma', 'Jest', 'GraphQL'],
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const highlights = [
    {
      icon: Code,
      title: '3+ Years Experience',
      description: 'Building modern web applications'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating beautiful user experiences'
    },
    {
      icon: Zap,
      title: 'Performance Focused',
      description: 'Optimized and fast applications'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Working effectively in teams'
    }
  ];

  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '15+', label: 'Technologies' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium mb-4"
          >
            👨‍💻 About Me
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-6">
            Get to Know <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me Better</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate developer with a love for creating innovative solutions and beautiful user experiences that make a difference
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 mb-12 sm:mb-16">
          {/* Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl border border-white/50 relative overflow-hidden group">
              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full -translate-y-20 translate-x-20 group-hover:scale-125 transition-transform duration-700"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-200/15 to-blue-200/15 rounded-full translate-y-16 -translate-x-16 group-hover:scale-110 transition-transform duration-700"></div>

              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900  mb-4 sm:mb-6">
                  Hello! I'm a passionate developer
                </h3>
                <p className="text-gray-700  leading-relaxed mb-4 sm:mb-6 text-base sm:text-lg">
                  I enjoy creating things that live on the internet, whether that be websites,
                  applications, or anything in between. My goal is to always build products that
                  provide pixel-perfect, performant experiences.
                </p>
                <p className="text-gray-700  leading-relaxed mb-6 sm:mb-8 text-base sm:text-lg">
                  When I'm not coding, you can find me exploring new technologies, contributing to
                  open-source projects, or enjoying a good cup of coffee while reading about the
                  latest trends in web development.
                </p>

                <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-sm">
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm">
                    <Coffee size={16} className="text-amber-600 sm:w-[18px] sm:h-[18px]" />
                    <span className="font-medium text-gray-700  text-xs sm:text-sm">Coffee Enthusiast</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm">
                    <Award size={16} className="text-blue-600 sm:w-[18px] sm:h-[18px]" />
                    <span className="font-medium text-gray-700  text-xs sm:text-sm">Problem Solver</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
          >
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const gradients = [
                'from-blue-500 to-cyan-500',
                'from-purple-500 to-pink-500',
                'from-green-500 to-emerald-500',
                'from-orange-500 to-red-500'
              ];
              const bgGradients = [
                'from-blue-50 to-cyan-50',
                'from-purple-50 to-pink-50',
                'from-green-50 to-emerald-50',
                'from-orange-50 to-red-50'
              ];
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className={`bg-gradient-to-br ${bgGradients[index]} rounded-lg sm:rounded-2xl p-3 sm:p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 backdrop-blur-sm relative overflow-hidden group`}
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8 group-hover:scale-125 transition-transform duration-500"></div>

                  <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${gradients[index]} rounded-lg sm:rounded-xl flex items-center justify-center mb-3 sm:mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={20} className="text-white sm:w-[26px] sm:h-[26px]" />
                  </div>
                  <h4 className="font-bold text-gray-900  mb-2 sm:mb-3 text-base sm:text-lg">{highlight.title}</h4>
                  <p className="text-gray-700  leading-relaxed text-sm sm:text-base">{highlight.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-200 text-center mb-8">
            Technologies I Work With
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white rounded-lg sm:rounded-2xl p-4 sm:p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 relative overflow-hidden group"
              >
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-5 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"
                  style={{ background: `linear-gradient(135deg, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})` }}></div>

                {/* Animated top border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${skill.color} rounded-t-2xl`}></div>

                {/* Category icon */}
                <div className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r ${skill.color} rounded-lg sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-white font-bold text-base sm:text-xl">{skill.category.charAt(0)}</span>
                </div>

                <h4 className="font-bold text-gray-900 mb-4 sm:mb-6 text-lg sm:text-xl">{skill.category}</h4>

                <div className="flex flex-wrap gap-2 sm:gap-3">
                  {skill.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (techIndex * 0.05) }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.1 }}
                      className="px-2 py-1 sm:px-4 sm:py-2 
                           
                          bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800
                         
                           rounded-full text-xs sm:text-sm font-medium 
                           shadow-sm hover:shadow-md transition-all duration-200 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}


                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3 group-hover:scale-110 transition-transform duration-300">
                {stat.number}
              </div>
              <div className="text-gray-700  font-semibold text-sm uppercase tracking-wide">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
