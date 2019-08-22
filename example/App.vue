<template>
  <div>
    <p class="package-name">
      <svg
        class="vue-icon"
        viewBox="0 0 256 221"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid"
      >
        <g>
          <path
            d="M204.8,0 L256,0 L128,220.8 L0,0 L50.56,0 L97.92,0 L128,51.2 L157.44,0 L204.8,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M0,0 L128,220.8 L256,0 L204.8,0 L128,132.48 L50.56,0 L0,0 Z"
            fill="#41B883"
          ></path>
          <path
            d="M50.56,0 L128,133.12 L204.8,0 L157.44,0 L128,51.2 L97.92,0 L50.56,0 Z"
            fill="#35495E"
          ></path>
        </g>
      </svg>
      Vue Icono
      <vue-icono :name="'icono'" color="rgb(65, 184, 131)"/>
    </p>
    <div class="container" v-highlight>
      <div class="usage">
        <i class="description">Usage:</i>
        <pre>
          <code class='html'>{{this.getUsageTemplate()}}</code>
        </pre>
      </div>
      <div class="all-icons">
        <div v-for="name in iconsNames" 
        :content="name" 
        v-tippy="{arrow : true, arrowType : 'round', animation : 'scale'}"
        v-bind:key="name">
          <vue-icono :name="name" color="#fff"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { tippy } from "vue-tippy";
import vueIcono from "../src/icono.js";

export default {
  name: "app",
  components: {
    vueIcono,
    tippy
  },
  data() {
    return {
      columns: [
        {
          label: "Propriety",
          field: "name"
        },
        {
          label: "Type",
          field: "type"
        },
        {
          label: "Default",
          field: "default"
        }
      ],
      rows: [
        { name: "source", type: "String", default: "" },
        { name: "container", type: "String", default: `div` },
        { name: "class-name", type: "String", default: "" },
        { name: "options", type: "Object", default: {} }
      ].map((obj, index) => {
        obj.id = index;
        return obj;
      }),
      width: 500
    };
  },
  computed: {
    iconsNames: function() {
      return [
        "home",
        "mail",
        "rss",
        "hamburger",
        "plus",
        "cross",
        "check",
        "power",
        "heart",
        "infinity",
        "flag",
        "file",
        "image",
        "video",
        "music",
        "headphone",
        "document",
        "folder",
        "pin",
        "smile",
        "eye",
        "sliders",
        "share",
        "sync",
        "reset",
        "gear",
        "signIn",
        "signOut",
        "support",
        "dropper",
        "tiles",
        "list",
        "chain",
        "youtube",
        "rename",
        "search",
        "book",
        "forbidden",
        "trash",
        "keyboard",
        "mouse",
        "user",
        "crop",
        "display",
        "imac",
        "iphone",
        "macbook",
        "imacBold",
        "iphoneBold",
        "macbookBold",
        "nexus",
        "microphone",
        "asterisk",
        "terminal",
        "paperClip",
        "market",
        "clock",
        "textAlignRight",
        "textAlignCenter",
        "textAlignLeft",
        "indent",
        "outdent",
        "frown",
        "meh",
        "locationArrow",
        "plusCircle",
        "checkCircle",
        "crossCircle",
        "exclamation",
        "exclamationCircle",
        "comment",
        "commentEmpty",
        "areaChart",
        "pieChart",
        "barChart",
        "bookmark",
        "bookmarkEmpty",
        "filter",
        "volume",
        "volumeLow",
        "volumeMedium",
        "volumeHigh",
        "volumeDecrease",
        "volumeIncrease",
        "volumeMute",
        "tag",
        "calendar",
        "camera",
        "piano",
        "ruler",
        "cup",
        "creditCard",
        "facebook",
        "twitter",
        "gplus",
        "linkedIn",
        "instagram",
        "flickr",
        "delicious",
        "codepen",
        "blogger",
        "play",
        "pause",
        "stop",
        "rewind",
        "forward",
        "next",
        "previous",
        "caretRight",
        "caretLeft",
        "caretUp",
        "caretDown",
        "rightArrow",
        "leftArrow",
        "upArrow",
        "downArrow",
        "sun",
        "moon",
        "disqus",
        "cart",
        "caretRightCircle",
        "caretLeftCircle",
        "caretUpCircle",
        "caretDownCircle",
        "caretRightSquare",
        "caretLeftSquare",
        "caretUpSquare",
        "caretDownSquare",
        "dribbble",
        "sitemap",
        "spinner",
        "circle",
        "ellipsis"
      ]
    }
  },
  methods: {
    getUsageTemplate() {
      return `<vue-icono name='mail' color="#fff"/>`;
    }
  }
};
</script>

<style lang="scss">
html {
  background: #3798c5;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
  padding: 0 30px 30px 30px;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif;
}
.remarkable {
  background: rgba(#000, .2);
  border-radius: 10px;
  padding:20px 0;
  margin-top: 45px;
}
.package-name {
  color: #fff;
  font-size: 35px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 60px;
}
.vue-icon {
  path {
    transition: 200ms ease-in;
  }
}
.vue-icon {
  height: 30px;
  width: auto;
  &:hover {
    path {
      &:not(:last-of-type) {
        fill: rgb(53, 73, 94);
      }
      &:last-of-type {
        fill: rgb(65, 184, 131);
      }
    }
  }
}
.icono {
  color: #fff;
}
.all-icons {
  width: 610px;
  margin: 0 auto;
  div {
    display: inline-block;
    padding: 14px;
    background:rgba(#000, 0);
    transition: 150ms linear;
    &:hover {
      background:rgba(#000, 0.3);
    }
  }
}
.container {
  display: inline-block;
  margin: 0 auto;
  text-align: center;
  width: 100%;
}
.container {
  text-align: center;
  display: inline-block;
  vertical-align: top;
}
.usage {
  text-align: left;
  display: inline-block;
  vertical-align: top;
  pre {
    margin: 0;
  }
  code {
    text-align: left;
    padding: 20px 30px !important;
    width: 500px;
    margin: 0 auto;
    font-size: 14px !important;
  }
}

.description {
  color: #fff;
  font-size: 25px;
  font-weight: 600;
  text-decoration: underline;
}

.instagram-embed {
  width: 500px;
}

// Table styles
.vgt-responsive {
  overflow: hidden;
  border-radius: 10px;
  -webkit-box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  box-shadow: 2px 3px 38px -5px rgba(0, 0, 0, 0.75);
  margin: 15px 0 25px 0;
}

::selection {
  color: darken(rgb(53, 73, 94), 10%);
  background: rgb(65, 184, 131);
}
</style>
