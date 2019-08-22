/* eslint-disable prettier/prettier */
import 'icono/dist/icono.min.css'
export default {
  name: 'vue-icono',
  props: {
    name: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: '#000'
    },
    className: {
      type: String,
      default: ''
    },
    container: {
      type: String,
      default: 'i'
    },
    styles: {
      type: Object,
      default: () => {}
    }
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
  mounted () {
    const iconExists = this.iconsNames.includes(this.name)
    if (!iconExists) throw new Error(`[vue-icono]: Icon name "${this.name}" - not found`)
  },
  render () {
    const Container = this.container;
    return (
      <Container 
      class={`icono-${this.name} ${this.className}`}
      style={{
        color: this.color,
        ...this.styles
      }}
      >
      </Container>
    )
  }
}