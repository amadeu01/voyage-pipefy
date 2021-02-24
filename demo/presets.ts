const queriesIntrospection = require('./presets/queries_introspection.json');
const internalIntrospection = require('./presets/internal_introspection.json');

export const PRESETS = {
  'Queries API': queriesIntrospection,
  'Internal API': internalIntrospection,
};

export const defaultPresetName = 'Queries API';
export const defaultPreset = PRESETS[defaultPresetName];
