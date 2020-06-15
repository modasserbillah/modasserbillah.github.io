module.exports = {
  title: "Modasser Billah",
  description: "",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    personalPhoto: "/images/op.png", // the base directory for this image is the public directory
    fullName: "Modasser Billah", // appears in about page
    bio:
    `Generalist Software Engineer with passionate interest in software engineering best practices, engineering management and data science. Specialized in Backend development with Django and Flask in Python, frontend development with Vue JS, data analysis with Python data science ecosystem. AWS Certified Developer Associate. Self-organized with a strong sense of ownership of responsibilities. Experienced in remote work and engineering leadership.`, // appears in about page
    nav: [
      {
        text: "Home",
        link: "/"
      },
      // {
      //   text: "Archive",
      //   link: "/archive/"
      // },
      {
        text: "Tags",
        link: "/tag/"
      },
      {
        text: "About",
        link: "/pages/about/"
      }
    ],
    disqus: "sleepy-montalcini-0ec249-netlify-com", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShare: true, // enables social share
    socialShareNetworks: ["facebook", "twitter"], // required for social share plugin
    footer: {
      contact: [
        {
          type: "github",
          link: "https://github.com/modasserbillah/"
        },
      //   {
      //     type: "instagram",
      //     link: "https://instagram.com/z3bya/"
      //   },
      //   {
      //     type: "facebook",
      //     link: "https://facebook.com/ahmad.mostafa.z3by/"
      //   },
        {
          type: "linkedin",
          link: "https://bd.linkedin.com/in/ahm-modasser-billah-6b277aa9"
        },
        {
          type: "twitter",
          link: "https://twitter.com/billah_tishad/"
        },
        {
          type: "mail",
          link: "mailto:imtishad@gmail.com"
        }
      ],
      copyright: [

        {
          text: `Modasser Billah | Copyright © ${new Date().getFullYear()}-present`,
          link: "/"
        }
      ]
    }
  },
  plugins: [
    [
      "@vuepress/blog",
      {
        directories: [
          {
            id: "post",
            dirname: "_posts",
            path: "/",
            layout: "IndexPost",
            itemLayout: "Post",
            itemPermalink: "/:year/:month/:day/:slug",
            pagination: {
              perPagePosts: 5
            }
          },
          {
            id: "archive",
            dirname: "_archive",
            path: "/archive/",
            layout: "IndexArchive",
            itemLayout: "Post",
            itemPermalink: "/archive/:year/:month/:day/:slug",
            pagination: {
              perPagePosts: 5
            }
          }
        ],
        frontmatters: [
          {
            id: "tag",
            keys: ["tag", "tags"],
            path: "/tag/",
            layout: "Tags",
            frontmatter: { title: "Tags" },
            itemlayout: "Tag",
            pagination: {
              perPagePosts: 5
            }
          }
        ]
      }
    ],
    ["@vuepress/back-to-top"],
    ["@vuepress/last-updated"],
    ["vuepress-plugin-disqus"],
    ["vuepress-plugin-seo"],
    ["vuepress-plugin-sitemap"],
    ["vuepress-plugin-smooth-scroll"],
    ["vuepress-plugin-social-share"],
    ["vuepress-plugin-reading-time"],
    ["vuepress-plugin-reading-progress"],
    ["vue-feather-icons"],
    ["remove-markdown"],
    ["@vuepress/theme-blog"],
    ["@vuepress/plugin-search"],
    ["@vuepress/plugin-pwa"],
    ["@vuepress/plugin-nprogress"],
    ["@vuepress/plugin-medium-zoom"],
    [
      'vuepress-plugin-container',
      {
        type: 'tip',
        defaultTitle: {
          '/': 'TIP',
        },
      },
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'warning',
        defaultTitle: {
          '/': 'NOTE',
        },
      },
    ],
    ["@vuepress/plugin-google-analytics",
      {
        "ga": "UA-163301873-1"
      }
    ],
    [
      "vuepress-plugin-mathjax",
      {
        target: 'svg',
        macros: {
          '*': '\\times',
        },
      },
    ],
  ]
};
