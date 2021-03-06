export const geojson = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.4281017780303955, 48.6102813280393],
            [-4.428182244300842, 48.61029906219208],
            [-4.428203701972961, 48.610235219213],
            [-4.4281768798828125, 48.61021393820204],
            [-4.428182244300842, 48.61018556350678],
            [-4.4279783964157104, 48.61015009511534],
            [-4.427956938743591, 48.610182016668766],
            [-4.428139328956604, 48.610228125543685],
            [-4.4281017780303955, 48.6102813280393],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.427871108055115, 48.61004723663921],
            [-4.42823052406311, 48.61010043932543],
            [-4.4282519817352295, 48.61006142402768],
            [-4.428198337554932, 48.61004368979147],
            [-4.428300261497498, 48.60986989394695],
            [-4.428219795227051, 48.609837972196175],
            [-4.428166151046753, 48.60990536253523],
            [-4.428133964538574, 48.60996565907812],
            [-4.428080320358276, 48.60997629963704],
            [-4.428032040596008, 48.60999403389693],
            [-4.428015947341919, 48.61002240869979],
            [-4.4279032945632935, 48.61000467444987],
            [-4.427871108055115, 48.61004723663921],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.427822828292846, 48.61008979879269],
            [-4.427822828292846, 48.610040142943475],
            [-4.427656531333923, 48.61004723663921],
            [-4.427656531333923, 48.61009689248143],
            [-4.427822828292846, 48.61008979879269],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.427661895751953, 48.60995501851696],
            [-4.427796006202698, 48.60984506592033],
            [-4.427592158317566, 48.609742206822844],
            [-4.427458047866821, 48.60984151905837],
            [-4.427661895751953, 48.60995501851696],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.4276511669158936, 48.60974930056044],
            [-4.427812099456787, 48.609618066253745],
            [-4.427769184112549, 48.609593238103315],
            [-4.427608251571655, 48.60972801934469],
            [-4.4276511669158936, 48.60974930056044],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.427694082260132, 48.60977767550082],
            [-4.427769184112549, 48.60982378474494],
            [-4.42798912525177, 48.60965353501892],
            [-4.427908658981323, 48.60960742561936],
            [-4.427694082260132, 48.60977767550082],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.428074955940247, 48.60952230046336],
            [-4.428348541259766, 48.60941589381658],
            [-4.42823588848114, 48.609302393146194],
            [-4.427962303161621, 48.609419440708415],
            [-4.428074955940247, 48.60952230046336],
          ],
        ],
      },
    },
    {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-4.427962303161621, 48.608990264987234],
            [-4.428112506866455, 48.608873216430204],
            [-4.42821443080902, 48.608766808415666],
            [-4.428219795227051, 48.608600102075414],
            [-4.428155422210693, 48.608514975221304],
            [-4.428150057792664, 48.60846886478208],
            [-4.428182244300842, 48.608397925562606],
            [-4.4281768798828125, 48.60833408017986],
            [-4.428037405014038, 48.60837309681225],
            [-4.427940845489502, 48.608511428265935],
            [-4.427887201309204, 48.60875971454004],
            [-4.4278281927108765, 48.60884838791353],
            [-4.4278281927108765, 48.608958342680396],
            [-4.427871108055115, 48.60899381190897],
            [-4.427962303161621, 48.608990264987234],
          ],
        ],
      },
    },
  ],
};

export const layerStyle = (fillColor: string, fillOutlineColor: string) => ({
  type: 'fill',
  paint: {
    'fill-color': fillColor,
    'fill-outline-color': fillOutlineColor,
  },
});
