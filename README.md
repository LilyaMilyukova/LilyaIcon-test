# icon-test

`Icon` component on top of `lucide-react` and `tailwind-variants`.

Size is controlled either by the `size` variant (`xs` … `xl`, Tailwind classes) or by a numeric `customSize`, which maps to Lucide's native `size` prop and disables the variant class so the two never conflict.

```tsx
<Icon name="House" size="lg" color="primary" />
<Icon name="House" customSize={40} color="error" />
```

## Scripts

```
npm run dev        # Vite dev server
npm run typecheck  # tsc --noEmit
npm run lint       # eslint
npm run build      # typecheck + vite build
```
