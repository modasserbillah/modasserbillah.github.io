module.exports = {
  title: "Modasser Billah",
  description: "",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    personalPhoto: "/images/new_dp.png", // the base directory for this image is the public directory
    fullName: "Modasser Billah", // appears in about page
    bio:
    `Generalist Software Engineer with passionate interest in software engineering best practices, engineering management and data science. Specialized in Backend development with Django and Flask in Python, frontend development with Vue JS, data analysis with Python data science ecosystem. AWS Certified Developer Associate. Self-organized with a strong sense of ownership of responsibilities. Experienced in remote work and engineering leadership. Currently working as a Senior Backend Developer at <a href="https://doist.com"> Doist</a>.`, // appears in about page
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
