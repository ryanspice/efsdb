# PixelBoats Card Recovery Lab v0.4.0

A standalone SvelteKit / Three.js lab for the PixelBoats collectible recovery flow.

## Included

- GPU-rendered moonlit Sapphire Cove background
- Animated shader water, moon reflection, coast lights, haze and wake
- WebGL navigation rail, resource HUD, Pirate-o-pedia and physically shaded buttons
- Paper-thin laminated lore card (`0.014` world-unit edge)
- Four-turn 2D-style recovery spin
- Exact locked landing transform with no correction frame or resting-position jump
- Drag rotation, click-to-flip and wheel zoom
- Archive flight into Pirate-o-pedia
- Optional exposure and world-motion tuning panel

## Run

```bash
pnpm install
pnpm dev
```

Open `http://localhost:5173`.

Open `http://localhost:5173/?debug=1` for the tuning panel, or press the backtick key.

## Controls

- Drag card: inspect
- Click card: flip
- Mouse wheel: zoom
- `R`: replay reveal
- `Enter` / `Space`: flip
- `A`: archive
- Backtick: toggle lab controls

## Transform hierarchy

```text
cardAnchor          landing position + scale
  cardTilt          final inspectable orientation
    revealSpin      temporary exact full rotations only
      paper card
```

The reveal finishes by assigning the captured landing position, quaternion and scale to the same nodes used by the resting state. `revealSpin` completes exactly four full rotations and returns to zero, so the visible transform is identical before and after the reveal state transition.

## Production follow-ups

1. Replace procedural card art with approved PixelBoats textures.
2. Replace canvas text with an MSDF atlas.
3. Drive weather, world time, port lights and wake from game packets.
4. Persist collection state before starting the reveal.
5. Queue multiple card discoveries through a presentation coordinator.
6. Add Playwright screenshots for start, midpoint, exact landing and archive completion.
