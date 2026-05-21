# JsonLens Core Contract

This file defines what the core is responsible for and what should stay outside the core.

## Core mission

The core coordinates the JsonLens instance. It should remain small, stable and predictable.

## Core responsibilities

### 1. Instance lifecycle

The core owns:

- construction
- initialization
- rendering coordination
- value replacement
- destroy

### 2. State coordination

The core owns:

- central instance-local state
- state updates
- active mode
- active path
- parsed result references

### 3. Events

The core owns:

- instance-local event bus
- lifecycle and parser events
- plugin-consumable events

### 4. Commands

The core owns:

- command registry
- essential built-in commands
- command dispatching

Current built-in commands:

- `setMode`
- `setValue`
- `expandAll`
- `collapseAll`
- `setNodeCollapsed`
- `setActivePath`

### 5. Parsing coordination

The core chooses the configured adapter or selects the default string/object adapter.

Parser details should stay in adapters or utilities.

### 6. Rendering coordination

The core renders:

- root container
- optional toolbar
- active view container
- controlled invalid JSON error state

Concrete feature rendering should stay in plugins or focused components.

### 7. Plugin installation

The core owns:

- plugin installation
- plugin command registration
- plugin view registration
- plugin toolbar contributions
- plugin teardown

## What should not go into the core if avoidable

The core should not directly implement:

- advanced search navigation
- masking rules
- diff viewer
- schema validation
- lazy tree virtualization
- download actions
- storage strategies beyond plugin hooks
- ModularGrid-specific rendering
- BASE3-specific routing
- custom business renderers

These belong in plugins, adapters or external integration code.

## Allowed core changes

Core changes are allowed when a new stable extension point is missing.

Good examples:

- a missing lifecycle hook
- a missing view contribution type
- a missing command/event needed by multiple plugins
- a missing render context field that avoids unsafe DOM coupling

Bad examples:

- hardcoding a ModularGrid section name in the core
- adding one-off UI controls to `JsonLens.js`
- hiding feature behavior in CSS instead of state/commands

## Long-term goal

Most future growth should happen through:

- plugins
- adapters
- utilities
- focused view components
