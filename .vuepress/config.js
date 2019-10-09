module.exports = {
  title: "Uwaylim Course notes",
  description: "",
  theme: "@vuepress/theme-blog",
  themeConfig: {
    // personalPhoto: "/images/personalPhoto.png", // the base directory for this image is the public directory
    // fullName: "", // appears in about page
    // bio:
    //   "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur quam voluptas nam dolorum minus consequuntur fugit quis repellendus hic vero praesentium facilis amet minima officia impedit, expedita quo veniam perferendis.", // appears in about page
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
      }
      // {
      //   text: "About",
      //   link: "/pages/about/"
      // }
    ],
    disqus: "https-wonderful-pare-b8e3cb-netlify-com", // if you want to incorporate Disqus for comments replace this value else just get rid of it
    socialShare: true, // enables social share
    socialShareNetworks: ["facebook", "twitter"], // required for social share plugin
    footer: {
      // contact: [
      //   {
      //     type: "github",
      //     link: "https://github.com/z3by/"
      //   },
      //   {
      //     type: "instagram",
      //     link: "https://instagram.com/z3bya/"
      //   },
      //   {
      //     type: "facebook",
      //     link: "https://facebook.com/ahmad.mostafa.z3by/"
      //   },
      //   {
      //     type: "linkedin",
      //     link: "https://www.linkedin.com/in/z3by/"
      //   },
      //   {
      //     type: "twitter",
      //     link: "https://twitter.com/ahmad_mostafa10/"
      //   }
      // ],
      copyright: [
        {
          text: "Privacy Policy",
          link: "https://policies.google.com/privacy?hl=en-US"
        },
        {
          text: `MIT Licensed | Copyright © ${new Date().getFullYear()}-present`,
          link: ""
        },
        {
          text: "Safina Society website",
          link: "https://www.safinasociety.org/adults"
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
    ["vuepress-plugin-disqus"]
  ]
};
