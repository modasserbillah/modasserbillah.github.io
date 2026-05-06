module.exports = {
  title: "Modasser Billah",
  description: "",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    logo: '/images/logo.png',
    personalPhoto: "/images/new_dp.png", // the base directory for this image is the public directory
    fullName: "AHM Modasser Billah", // appears in about page
    phone: "+8801879995822",
    email: "modasser.freelance@gmail.com",
    bio:
    `I'm a generalist software engineer who cares deeply about building things the right way — clean code, solid testing, and pragmatic architecture. I specialize in backend development with Python and have a strong background in data analysis using the Python data science ecosystem. Lately I've been exploring the intersection of AI and software development, and I find it endlessly fascinating. Passionate about engineering best practices, engineering management, and making teams work well. I work remotely and have years of experience with remote work practices and distributed team collaboration. Currently working as a Backend Developer at Doist.`, // appears in about page
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "Ship30for30",
        link: "/ship/"
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
          link: "https://linkedin.com/in/modasserbillah"
        },
        {
          type: "twitter",
          link: "https://twitter.com/billah_tishad/"
        },
        {
          type: "mail",
          link: "mailto:modasser.freelance@gmail.com"
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
  smoothScroll: true,
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
            id: "ship",
            dirname: "_ship",
            path: "/ship/",
            layout: "Ship30Layout",
            itemLayout: "Post",
            itemPermalink: "/ship/:year/:month/:day/:slug",
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
    [
      "vuepress-plugin-mailchimp",
      {
        // You need to provide this plugin with your Mailchimp endpoint in order for it
        // to know where to save the email address. See more detail in Config section.
        endpoint: "https://modasserbillah.us17.list-manage.com/subscribe/post?u=fea76ce48aadcb3d3237bb274&amp;id=1d9e742a8e",
        title: "Join Mailing List",
        content: "Get new posts delivered to your inbox. No spam.",
        submitText: "Subscribe"

      }
    ],
  ]
};
