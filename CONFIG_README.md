# Flexibar Configuration Guide

This file documents all available configuration options in `config.json`.

## 1. MESSAGE SETTINGS

Configuration for the announcement message text and styling.

### `message.type`

- **Type:** String
- **Options:** `"rolling"` | `"single"`
- **Description:**
  - `"rolling"`: Message scrolls continuously across the bar
  - `"single"`: Message displays statically without scrolling

### `message.text`

- **Type:** String (HTML allowed)
- **Description:** The announcement message text. Can include HTML tags like `<a>` for links.
- **Example:** `"🎉 BLACK FRIDAY deals starts in 2 days! <a href=\"https://example.com\" class=\"link-style-underline\" target=\"_blank\">Shop Now</a>"`

### `message.fontFamily`

- **Type:** String
- **Options:** `"Montserrat"`, `"Roboto"`, `"Open Sans"`, `"Lato"`, `"Poppins"`, or any Google Font
- **Description:** Font family for the message text

### `message.fontColor`

- **Type:** String (Hex color)
- **Description:** Text color in hexadecimal format
- **Example:** `"#ffffff"` (white)

### `message.fontSize`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Font size of the message text

### `message.fontWeight`

- **Type:** Number
- **Options:** `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- **Description:** Font weight (thickness) of the text

---

## 2. LINK SETTINGS

Configuration for links within the message (if using inline link builder).

### `link.text`

- **Type:** String
- **Description:** Link text to display

### `link.address`

- **Type:** String (URL)
- **Description:** URL where the link points

### `link.style`

- **Type:** String
- **Options:** `"none"`, `"underline"`, `"bold"`, `"italic"`
- **Description:** Visual style of the link

### `link.openWith`

- **Type:** String
- **Options:** `"_blank"` | `"_self"`
- **Description:**
  - `"_blank"`: Opens link in a new tab
  - `"_self"`: Opens link in the same tab

---

## 3. BAR SETTINGS

Configuration for the announcement bar container.

### `bar.position`

- **Type:** String
- **Options:** `"top"`, `"sticky-top"`, `"bottom"`, `"sticky-bottom"`
- **Description:**
  - `"top"`: Bar at the top, scrolls away with content
  - `"sticky-top"`: Bar at the top, stays fixed while scrolling
  - `"bottom"`: Bar at the bottom, scrolls away with content
  - `"sticky-bottom"`: Bar at the bottom, stays fixed while scrolling

### `bar.animation`

- **Type:** String
- **Options:** `"none"`, `"fallingTop"`, `"animateLeft"`, `"animateRight"`, `"animateBottom"`
- **Description:** Entrance animation for the bar when page loads

### `bar.contentAlignment`

- **Type:** String
- **Options:** `"left"`, `"center"`, `"right"`
- **Description:** Horizontal alignment of bar content (applies to single message type)

### `bar.border.width`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Border thickness

### `bar.border.style`

- **Type:** String
- **Options:** `"none"`, `"solid"`, `"dashed"`, `"dotted"`, `"double"`, `"groove"`, `"ridge"`, `"inset"`, `"outset"`
- **Description:** Border style

### `bar.border.color`

- **Type:** String (Hex color)
- **Description:** Border color in hexadecimal format

### `bar.border.radius`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Border corner radius (rounded corners)

### `bar.padding`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Internal padding of the bar

### `bar.clickable.enabled`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Whether the entire bar is clickable

### `bar.clickable.url`

- **Type:** String (URL)
- **Description:** URL to redirect when bar is clicked (only if `enabled` is `true`)

### `bar.clickable.openWith`

- **Type:** String
- **Options:** `"_blank"` | `"_self"`
- **Description:** How to open the clickable bar URL

### `bar.backgroundType`

- **Type:** String
- **Options:** `"solid"` | `"gradient"`
- **Description:** Type of background for the bar

### `bar.backgroundColor`

- **Type:** String (Hex color)
- **Description:** Solid background color (used when `backgroundType` is `"solid"`)

### `bar.gradient.angle`

- **Type:** Number
- **Range:** 0-360
- **Unit:** Degrees
- **Description:** Gradient angle (used when `backgroundType` is `"gradient"`)

### `bar.gradient.color1`

- **Type:** String (Hex color)
- **Description:** Gradient start color

### `bar.gradient.color2`

- **Type:** String (Hex color)
- **Description:** Gradient end color

---

## 4. BUTTON SETTINGS

Configuration for the call-to-action button.

### `button.enabled`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Whether to show the button

### `button.text`

- **Type:** String
- **Description:** Text displayed on the button

### `button.textColor`

- **Type:** String (Hex color)
- **Description:** Button text color

### `button.backgroundColor`

- **Type:** String (Hex color)
- **Description:** Button background color

### `button.borderRadius`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Button corner radius (rounded corners)

### `button.animation`

- **Type:** String
- **Options:** `"none"`, `"bounce"`, `"flash"`, `"rubberBand"`, `"emit"`, `"swing"`, `"shake"`, `"pulse"`
- **Description:** Animation effect for the button

### `button.url`

- **Type:** String (URL)
- **Description:** URL where the button redirects

### `button.openWith`

- **Type:** String
- **Options:** `"_blank"` | `"_self"`
- **Description:** How to open the button URL

### `button.paddingX`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Horizontal (left/right) padding

### `button.paddingY`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Vertical (top/bottom) padding

### `button.fontSize`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Button text font size

---

## 5. COUNTDOWN SETTINGS

Configuration for the countdown timer.

### `countdown.enabled`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Whether to show the countdown timer

### `countdown.targetDate.startDate`

- **Type:** String (ISO 8601 format)
- **Description:** Start date for the countdown
- **Example:** `"2025-12-03T00:00:00.000Z"`

### `countdown.targetDate.targetDate`

- **Type:** String (ISO 8601 format)
- **Description:** Target/end date for the countdown
- **Example:** `"2025-12-13T00:00:00.000Z"`

### `countdown.textColor`

- **Type:** String (Hex color)
- **Description:** Countdown text color

### `countdown.backgroundColor`

- **Type:** String (Hex color or `"transparent"`)
- **Description:** Background color for each countdown unit box

### `countdown.shadowColor`

- **Type:** String (Hex color)
- **Description:** Box shadow color for countdown units

### `countdown.fontSize`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Countdown numbers font size

### `countdown.fontWeight`

- **Type:** Number
- **Options:** `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
- **Description:** Countdown numbers font weight

### `countdown.fontFamily`

- **Type:** String
- **Description:** Font family for countdown text

### `countdown.borderRadius`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Border radius for countdown unit boxes

### `countdown.padding`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Padding inside countdown unit boxes

---

## 6. SCROLLING SETTINGS

Configuration for the scrolling/rolling message animation.

### `scrolling.enabled`

- **Type:** Boolean
- **Options:** `true` | `false`
- **Description:** Enable/disable message scrolling (applies to rolling message type)

### `scrolling.speed`

- **Type:** Number
- **Unit:** Pixels per second
- **Description:** Speed of the scrolling animation

### `scrolling.gap`

- **Type:** Number
- **Unit:** Pixels
- **Description:** Gap/spacing between repeated messages in rolling mode

---

## Example Configuration

```json
{
  "message": {
    "type": "rolling",
    "text": "🎉 Sale starts now!",
    "fontFamily": "Montserrat",
    "fontColor": "#ffffff",
    "fontSize": 19,
    "fontWeight": 700
  },
  "bar": {
    "position": "sticky-top",
    "animation": "fallingTop",
    "contentAlignment": "center",
    "backgroundColor": "#000000"
  },
  "button": {
    "enabled": true,
    "text": "Shop Now",
    "backgroundColor": "#D32F2F"
  },
  "countdown": {
    "enabled": true,
    "targetDate": {
      "targetDate": "2025-12-25T00:00:00.000Z"
    }
  }
}
```

---

## Notes

- All color values should be in hexadecimal format (e.g., `"#ffffff"`)
- All numeric values are in pixels unless otherwise specified
- Dates should be in ISO 8601 format
- Boolean values should be `true` or `false` (lowercase, no quotes)
- String values should be wrapped in double quotes
