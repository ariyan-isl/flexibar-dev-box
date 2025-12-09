# Flexibar Configuration Guide

This file documents all available configuration options in `config.json`.

## 1. TYPE SETTINGS

### `type`

- **Type:** String
- **Options:** `"single"` | `"rolling"` | `"multiple"`
- **Description:**
  - `"single"`: Message displays statically without scrolling
  - `"rolling"`: Message scrolls continuously across the bar
  - `"multiple"`: Multiple messages rotate in a slideshow with navigation arrows

---

## 2. OPTIONS

### `options.button`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Whether to show the call-to-action button

### `options.countdown`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Whether to show the countdown timer

---

## 3. CONTENT SETTINGS

### 3.1 GENERAL SETTINGS

Applies to all text elements in the bar.

#### `content.general.fontFamily`

- **Type:** String
- **Options:** `"Montserrat"`, `"Roboto"`, `"Open Sans"`, `"Lato"`, `"Poppins"`, or any Google Font
- **Description:** Font family for the message text

#### `content.general.fontColor`

- **Type:** String (Hex color)
- **Description:** Text color in hexadecimal format
- **Example:** `"#ffffff"` (white)

#### `content.general.fontSize`

- **Type:** String
- **Options:** `"small"`, `"normal"`, `"large"`, `"very-large"`
- **Description:** Base font size for the bar content

#### `content.general.fontWeight`

- **Type:** Number
- **Options:** `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- **Description:** Font weight (thickness) of the text

### 3.2 MESSAGE SETTINGS

#### `content.message`

- **Type:** Object
- **Description:** Reserved for future message-specific styling. Currently can be left empty or with placeholder properties.

### 3.3 COUNTDOWN SETTINGS

#### `content.countdown.textColor`

- **Type:** String (Hex color)
- **Description:** Countdown text color

#### `content.countdown.backgroundColor`

- **Type:** String (Hex color or `"transparent"`)
- **Description:** Background color for each countdown unit box

#### `content.countdown.shadowColor`

- **Type:** String (Hex color)
- **Description:** Box shadow color for countdown units

**Note:** Countdown border radius and padding are controlled in `style.css` via the `.countdown-unit` class.

### 3.4 BUTTON SETTINGS

#### `content.button.textColor`

- **Type:** String (Hex color)
- **Description:** Button text color

#### `content.button.backgroundColor`

- **Type:** String (Hex color)
- **Description:** Button background color

#### `content.button.borderRadius`

- **Type:** Number
- **Unit:** rem
- **Description:** Button corner radius (rounded corners)

#### `content.button.animation`

- **Type:** String
- **Options:** `"none"`, `"bounce"`, `"flash"`, `"rubberBand"`, `"emit"`, `"swing"`, `"shake"`, `"pulse"`
- **Description:** Animation effect for the button

**Note:** Button padding is controlled in `style.css` via the `.flexibar-button` class.

### 3.5 BAR SETTINGS

Configuration for the announcement bar container.

#### `content.bar.position`

- **Type:** String
- **Options:** `"top"`, `"sticky-top"`, `"bottom"`, `"sticky-bottom"`
- **Description:**
  - `"top"`: Bar at the top, scrolls away with content
  - `"sticky-top"`: Bar at the top, stays fixed while scrolling
  - `"bottom"`: Bar at the bottom, scrolls away with content
  - `"sticky-bottom"`: Bar at the bottom, stays fixed while scrolling

#### `content.bar.animation`

- **Type:** String
- **Options:** `"none"`, `"fallingTop"`, `"animateLeft"`, `"animateRight"`, `"animateBottom"`
- **Description:** Entrance animation for the bar when page loads

#### `content.bar.contentAlignment`

- **Type:** String
- **Options:** `"left"`, `"center"`, `"right"`
- **Description:** Horizontal alignment of bar content (applies to single/multiple message types)

#### `content.bar.fontSize`

- **Type:** String
- **Options:** `"small"`, `"normal"`, `"large"`, `"very-large"`
- **Description:** Font size setting for the bar (inherited by all elements)

#### `content.bar.border.width`

- **Type:** Number
- **Unit:** rem
- **Description:** Border thickness

#### `content.bar.border.style`

- **Type:** String
- **Options:** `"none"`, `"solid"`, `"dashed"`, `"dotted"`, `"double"`, `"groove"`, `"ridge"`, `"inset"`, `"outset"`
- **Description:** Border style

#### `content.bar.border.color`

- **Type:** String (Hex color)
- **Description:** Border color in hexadecimal format

#### `content.bar.border.radius`

- **Type:** Number
- **Unit:** rem
- **Description:** Border corner radius (rounded corners)

#### `content.bar.padding`

- **Type:** Number
- **Unit:** rem
- **Description:** Internal padding of the bar

#### `content.bar.clickable.enabled`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Whether the entire bar is clickable

#### `content.bar.clickable.url`

- **Type:** String (URL)
- **Description:** URL to redirect when bar is clicked (only if `enabled` is `true`)

#### `content.bar.clickable.openWith`

- **Type:** String
- **Options:** `"_blank"` | `"_self"`
- **Description:** How to open the clickable bar URL

#### `content.bar.backgroundType`

- **Type:** String
- **Options:** `"solid"` | `"gradient"`
- **Description:** Type of background for the bar

#### `content.bar.backgroundColor`

- **Type:** String (Hex color)
- **Description:** Solid background color (used when `backgroundType` is `"solid"`)

#### `content.bar.gradient.angle`

- **Type:** Number
- **Range:** 0-360
- **Unit:** Degrees
- **Description:** Gradient angle (used when `backgroundType` is `"gradient"`)

#### `content.bar.gradient.color1`

- **Type:** String (Hex color)
- **Description:** Gradient start color

#### `content.bar.gradient.color2`

- **Type:** String (Hex color)
- **Description:** Gradient end color

---

## 4. BAR ARRAY

The `bar` array contains individual message configurations. Each message can have its own text, button, and countdown.

### `bar[].message.title`

- **Type:** String (HTML allowed)
- **Description:** The announcement message text. Can include HTML tags like `<a>` for links.
- **Example:** `"🎉 BLACK FRIDAY deals starts in 2 days! <a href=\"https://example.com\" class=\"link-style-underline\" target=\"_blank\">Shop Now</a>"`

**Link Styles:**

- `class="link-style-underline"` - Underlined link
- `class="link-style-bold"` - Bold link
- `class="link-style-italic"` - Italic link

### `bar[].button.text`

- **Type:** String
- **Description:** Text displayed on the button

### `bar[].button.url`

- **Type:** String (URL)
- **Description:** URL where the button redirects

### `bar[].button.openWith`

- **Type:** String
- **Options:** `"_blank"` | `"_self"`
- **Description:** How to open the button URL
  - `"_blank"`: Opens in a new tab
  - `"_self"`: Opens in the same tab

### `bar[].countdown.targetDate`

- **Type:** String (ISO 8601 format)
- **Description:** Target/end date for the countdown
- **Example:** `"2025-12-13T00:00:00.000Z"`

---

## 5. CSS-CONTROLLED SETTINGS

The following settings are controlled in `style.css` and are **not** in the JSON config:

### Scrolling Animation

Located in `:root` CSS variables:

- `--scrolling-speed: 80px` - Speed in pixels per second
- `--scrolling-gap: 0.3125rem` - Gap between scrolling messages

### Countdown Unit Styling

Located in `.countdown-unit` class:

- `border-radius: 0.1875rem` - Border radius for countdown boxes
- `padding: 0.3125rem` - Padding inside countdown boxes

### Button Padding

Located in `.flexibar-button` class:

- `padding: 0.3125rem 0.625rem` - Vertical and horizontal padding

---

## 6. EXAMPLE CONFIGURATION

```json
{
  "type": "multiple",
  "options": {
    "button": true,
    "countdown": true
  },
  "content": {
    "general": {
      "fontFamily": "Montserrat",
      "fontColor": "#ffffff",
      "fontSize": "normal",
      "fontWeight": 700
    },
    "message": {},
    "countdown": {
      "textColor": "#fffffe",
      "backgroundColor": "transparent",
      "shadowColor": "#D32F2F"
    },
    "button": {
      "textColor": "#ffffff",
      "backgroundColor": "#D32F2F",
      "borderRadius": 0.25,
      "animation": "none"
    },
    "bar": {
      "position": "top",
      "animation": "animateLeft",
      "contentAlignment": "center",
      "fontSize": "normal",
      "border": {
        "width": 0,
        "style": "solid",
        "color": "#333333",
        "radius": 0
      },
      "padding": 0.3125,
      "clickable": {
        "enabled": false,
        "url": "",
        "openWith": "_blank"
      },
      "backgroundType": "solid",
      "backgroundColor": "#000000",
      "gradient": {
        "angle": 90,
        "color1": "#000000",
        "color2": "#333333"
      }
    }
  },
  "bar": [
    {
      "message": {
        "title": "🎉 BLACK FRIDAY deals starts in 2 days! <a href=\"https://example.com\" class=\"link-style-underline\" target=\"_blank\">Shop Now</a>"
      },
      "button": {
        "text": "See Deal",
        "url": "#",
        "openWith": "_blank"
      },
      "countdown": {
        "targetDate": "2025-12-13T00:00:00.000Z"
      }
    },
    {
      "message": {
        "title": "🚀 Free shipping on orders over $50!"
      },
      "button": {
        "text": "Shop Now",
        "url": "#shipping",
        "openWith": "_blank"
      },
      "countdown": {
        "targetDate": "2025-12-15T00:00:00.000Z"
      }
    }
  ]
}
```

---

## 7. NOTES

- All color values should be in hexadecimal format (e.g., `"#ffffff"`)
- Numeric values use rem units in the JSON config (1rem = 16px typically)
- Dates should be in ISO 8601 format
- Boolean values should be `true` or `false` (lowercase, no quotes)
- String values should be wrapped in double quotes
- The `bar[]` array can contain multiple message objects for slideshow/rotation
- For `type: "single"` or `type: "rolling"`, only the first item in the `bar[]` array is used
- For `type: "multiple"`, all items in the `bar[]` array are displayed in rotation with navigation arrows
- Scrolling speed, gap, countdown padding/border-radius, and button padding are controlled in CSS, not in the JSON config
