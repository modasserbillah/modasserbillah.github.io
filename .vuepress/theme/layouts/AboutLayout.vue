<template>
  <div>
    <div align="center" class="card">
      <div class="card-header">
        <img :src="$themeConfig.personalPhoto" :alt="title" class="card-img" />
        <h1>{{ $themeConfig.fullName }}</h1>
      </div>
      <p>{{ $themeConfig.bio }}</p>
      <ul class="personal-contact" v-if="$themeConfig.phone || $themeConfig.email">
        <li v-if="$themeConfig.phone">
          <PhoneIcon size="16" />
          <a :href="'tel:' + $themeConfig.phone">{{ $themeConfig.phone }}</a>
        </li>
        <li v-if="$themeConfig.email">
          <MailIcon size="16" />
          <a :href="'mailto:' + $themeConfig.email">{{ $themeConfig.email }}</a>
        </li>
      </ul>
      <hr />
      <ul class="contact" v-if="contact">
        <li class="contact-item" v-for="item in contact">
          <NavLink :link="item.link">
            <component :is="item.iconComponent"></component>
            {{ item.text }}
          </NavLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {
  GithubIcon,
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  MailIcon,
  PhoneIcon
} from "vue-feather-icons";

export default {
  components: {
    GithubIcon,
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    MailIcon,
    PhoneIcon
  },

  methods: {
    getIconComponentName(contactType) {
      switch (contactType) {
        case "github":
          return "GithubIcon";
        case "facebook":
          return "FacebookIcon";
        case "twitter":
          return "TwitterIcon";
        case "instagram":
          return "InstagramIcon";
        case "linkedin":
          return "LinkedinIcon";
        case "mail":
          return "MailIcon";
        default:
          return "";
      }
    }
  },

  computed: {
    contact() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.contact) ||
        []
      )
        .map(({ type, link }) => {
          return {
            iconComponent: this.getIconComponentName(type),
            link
          };
        })
        .filter(({ iconComponent }) => iconComponent);
    },

    copyright() {
      return (
        (this.$themeConfig.footer && this.$themeConfig.footer.copyright) || []
      );
    }
  }
};
</script>

<style scoped lang="stylus">
.card {
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
  border-radius: 50px;
  max-width: 450px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  overflow: hidden;
  transition: all 0.4s ease;

  .card-img {
    transition: all 0.4s ease;
  }

  .card-header {
    background: linear-gradient(to right, #ccc, #eee);
    padding-top: 50px;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 0;
    color: black;
    text-transform: uppercase;
  }

  p {
    padding: 20px 40px 0px 40px;
  }

  .personal-contact {
    list-style: none;
    padding: 0 40px;
    margin: 10px 0;

    li {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin: 8px 0;

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  .contact {
    display: flex;
    list-style: none;
    justify-content: center;

    .contact-item {
      margin: 0 5px;
    }
  }
}
</style>
