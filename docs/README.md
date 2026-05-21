# JsonLens Documentation Index

This directory contains the project briefing and architecture files that should be used to continue work across multiple chats.

## Read order for a new chat

A new chat should read these files in this order:

1. `docs/README.md`
2. `docs/CURRENT_STATUS.md`
3. `docs/WORKING_RULES.md`
4. `docs/architecture/CORE_CONTRACT.md`
5. `docs/architecture/PLUGIN_API.md`
6. `docs/architecture/ADAPTERS.md`
7. `docs/todo/FEATURE_TODO.md`

If the new chat only needs a compact briefing, provide:

- `docs/NEW_CHAT_BRIEFING.md`

## Purpose of these files

- `CURRENT_STATUS.md` describes the implemented baseline of the current patch.
- `WORKING_RULES.md` defines how future patches must be produced.
- `NEW_CHAT_BRIEFING.md` is a ready-to-copy briefing for starting a new chat.
- `architecture/CORE_CONTRACT.md` defines what belongs in the core.
- `architecture/PLUGIN_API.md` defines the plugin system.
- `architecture/ADAPTERS.md` defines input and integration adapter boundaries.
- `todo/FEATURE_TODO.md` is the development roadmap.

## Main project goal

JsonLens is a standalone JSON inspection module for browser UIs.

It should support:

- JSON parsing and validation
- tree view
- pretty view
- raw view
- syntax highlighting
- expand/collapse
- copy actions
- path inspection
- invalid JSON handling
- future ModularGrid RowDetail integration

## Important boundary

JsonLens must not be implemented as a hidden part of ModularGrid.

ModularGrid can consume JsonLens through adapters or renderers, but JsonLens remains an independent module.
