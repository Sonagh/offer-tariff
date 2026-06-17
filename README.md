# Offer tariffs mini project

Implementation of the pricing plans page based on the provided Figma design.

## Tech Stack

- React
- Next.js
- TypeScript
- Tailwind CSS

## Features

### Pricing Plans

- Loads tariffs from the API endpoint:
    - https://t-core.fit-hub.pro/Test/GetTariffs
- Displays all tariffs returned by the service.
- Calculates discount percentage dynamically:

  ```
  discount = ((full_price - price) / full_price) * 100
  ```

- Automatically selects the tariff with `is_best: true` on initial load.
- Highlights the currently selected tariff.
- Displays the "Best Offer" badge for tariffs marked as `is_best`.

### Timer

- Sticky header with a 2-minute countdown timer.
- Timer updates every second.
- When 30 seconds remain:
    - Timer changes to red.
    - Timer starts blinking.
- When the timer expires:
    - Discounted prices are hidden.
    - Regular prices (`full_price`) remain visible.

### Buy Button

- Animated blinking/pulse effect.
- Validation for required checkbox:
    - If the checkbox is not checked and the user clicks **Buy**, the checkbox is highlighted in red.

### Responsive Design

- Mobile layout.
- Tablet layout.
- Desktop layout.
- Matches the provided Figma design.

---

## Price Expiration Animation Proposal

When the timer expires:

1. Fade out discounted prices.
2. Animate the strike-through price removal.
3. Scale the regular price slightly (e.g. `scale(1.05)`).
4. Fade in the regular price as the primary price.
---

## Installation

```bash
bun install
---

## Run Development Server

```bash
bun run dev
```

Application will be available at:

```text
http://localhost:3001
```

---

## Build for Production

```bash
npm run build
npm start
```

---

## API Response Example

```json
{
  "id": "f347d050-073c-4969-ae91-7346f935cf70",
  "period": "1 week",
  "price": 149,
  "full_price": 999,
  "is_best": false,
  "text": "Just to get started"
}
```

---

## Assumptions

- The tariff marked with `is_best = true` is selected by default.
- If multiple tariffs have `is_best = true`, the first one is selected.
- Timer state is client-side only.
- No purchase API integration is required.
- Buy button demonstrates UI behavior only.

---

## Author

Sona Gharagyozyan