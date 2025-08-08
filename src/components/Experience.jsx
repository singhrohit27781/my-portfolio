import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Led the development of responsive web applications using React and TypeScript. Collaborated with cross-functional teams to deliver high-quality user experiences.',
      achievements: [
        'Improved application performance by 40% through code optimization',
        'Led a team of 4 developers on major product redesign',
        'Implemented automated testing reducing bugs by 60%'
      ],
      technologies: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'GraphQL']
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      location: 'New York, NY',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained full-stack web applications using modern technologies. Worked closely with designers and product managers to implement new features.',
      achievements: [
        'Built 5+ production applications from scratch',
        'Reduced server response time by 50%',
        'Mentored 2 junior developers'
      ],
      technologies: ['Vue.js', 'Node.js', 'Express', 'MongoDB', 'AWS']
    },
    {
      id: 3,
      title: 'Junior Web Developer',
      company: 'StartupXYZ',
      location: 'Austin, TX',
      period: '2019 - 2020',
      type: 'Full-time',
      description: 'Started my professional journey developing responsive websites and learning modern web development practices in a fast-paced startup environment.',
      achievements: [
        'Contributed to 10+ client projects',
        'Learned and implemented modern development workflows',
        'Improved website loading speed by 30%'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'React', 'PHP']
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Computer Science',
      school: 'Brainware University',
      location: 'Barasat , Kolkata',
      period: '2022 - Present',
      gpa: '7.5/10',
      achievements: [
        'Graduated Magna Cum Laude',
        'President of Computer Science Club',
        'Dean\'s List for 6 semesters'
      ]
    },
    {
      id: 2,
      degree: 'Full Stack Web Development Bootcamp',
      school: 'Code Academy',
      location: 'Online',
      period: '2024',
      achievements: [
        'Top 5% of graduating class',
        'Built 15+ projects during the program',
        'Received certification in MERN stack'
      ]
    }
  ];

  const certifications = [
    {
      name: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: '2023',
      credentialId: 'AWS-DEV-2023-001'
    },
    {
      name: 'React Developer Certification',
      issuer: 'Meta',
      date: '2022',
      credentialId: 'META-REACT-2022-456'
    },
    {
      name: 'Google Analytics Certified',
      issuer: 'Google',
      date: '2025',
      credentialId: 'GA-CERT-2021-789'
    }
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
            className="inline-block px-4 py-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-800 dark:text-green-300 rounded-full text-sm font-medium mb-4"
          >
            🚀 My Journey
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-200 mb-6">
            Experience & <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Education</span>
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey and educational background that shaped me into the developer I am today
          </p>
        </motion.div>

        {/* Work Experience */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <div className="flex items-center bg-gradient-to-r from-blue-50 to-indigo-50 px-8 py-4 rounded-2xl border border-blue-200">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                <Briefcase className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Work Experience</h3>
            </div>
          </motion.div>

          <div className="relative">
            {/* Enhanced Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-500 rounded-full shadow-sm"></div>

            {workExperience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-16"
              >
                {/* Enhanced Timeline dot */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                  className="absolute left-5 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full border-4 border-white shadow-xl z-10"
                >
                  <div className="absolute inset-1 bg-white rounded-full"></div>
                </motion.div>

                {/* Enhanced Content */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="ml-20 bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 w-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 relative overflow-hidden group"
                >
                  {/* Background decoration */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-125 transition-transform duration-500 opacity-50"></div>

                  <div className="relative z-10">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h4 className="text-2xl font-bold text-gray-900  mb-2 group-hover:text-blue-600 transition-colors duration-300">{job.title}</h4>
                        <p className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">{job.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end mt-4 md:mt-0 space-y-2">
                        <div className="flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full">
                          <Calendar size={16} className="mr-2" />
                          <span className="text-sm font-semibold">{job.period}</span>
                        </div>
                        <div className="flex items-center bg-gray-100 text-gray-700 px-4 py-2 rounded-full">
                          <MapPin size={16} className="mr-2" />
                          <span className="text-sm font-semibold">{job.location}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-700  mb-6 leading-relaxed text-lg">{job.description}</p>

                    <div className="mb-6">
                      <h5 className="font-bold text-gray-900  mb-4 text-lg">Key Achievements:</h5>
                      <ul className="space-y-3">
                        {job.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            viewport={{ once: true }}
                            className="flex items-start text-gray-700"
                          >
                            <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {job.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.05 }}
                          className="px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-blue-800 rounded-full text-sm font-semibold shadow-sm hover:shadow-md transition-all duration-200"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-16"
          >
            <div className="flex items-center bg-gradient-to-r from-purple-50 to-pink-50 px-8 py-4 rounded-2xl border border-purple-200">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center mr-4">
                <GraduationCap className="text-white" size={24} />
              </div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</h3>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-purple-50 rounded-xl p-6 border border-purple-100"
              >
                <h4 className="text-lg font-bold text-gray-900  mb-2">{edu.degree}</h4>
                <p className="text-purple-600 font-semibold mb-2">{edu.school}</p>
                
                <div className="flex items-center text-gray-600 dark:text-gray-400 mb-2">
                  <MapPin size={16} className="mr-1" />
                  <span className="text-sm mr-4 text-gray-700">{edu.location}</span>
                  <Calendar size={16} className="mr-1"  />
                  <span className="text-sm text-gray-700">{edu.period}</span>
                </div>

                {edu.gpa && (
                  <p className="text-gray-700  mb-3">GPA: {edu.gpa}</p>
                )}

                <div>
                  <h5 className="font-semibold text-gray-900  mb-2">Achievements:</h5>
                  <ul className="list-disc list-inside space-y-1">
                    {edu.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-gray-700  text-sm">{achievement}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center mb-12">
            <Award className="text-green-600 mr-3" size={28} />
            <h3 className="text-2xl font-bold text-gray-900 ">Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-green-50 rounded-xl p-6 text-center border border-green-100"
              >
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="text-white" size={24} />
                </div>
                <h4 className="font-bold text-gray-900  mb-2">{cert.name}</h4>
                <p className="text-green-600 font-semibold mb-2">{cert.issuer}</p>
                <p className="text-gray-700  text-sm mb-2">{cert.date}</p>
                <p className="text-gray-700  text-xs">ID: {cert.credentialId}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
