  const tltAttr = 'title';
  const tltPosAttr = 'data-tooltip-pos';
  let updateTooltip = (coll) => {
    coll.each((item) => {
      var attrs = item.get('attributes');
      attrs[tltPosAttr] = 'bottom';
      item.set('attributes', attrs);
    });
  }

export default (opt = {}) => {
    let editor = opt.editor;
    let pnm = editor.Panels;
    let optPanel = pnm.getPanel('options');
    if(optPanel){
      // Fix tooltip position
      var cmdBtns = optPanel.get('buttons');
      cmdBtns.each((btn) => {
        var attrs = btn.get('attributes');
        attrs[tltPosAttr] = 'bottom';
        btn.set('attributes', attrs);
      });
      // Remove preview
      let prvBtn = pnm.addButton('options', 'preview');
      prvBtn && cmdBtns.remove(prvBtn);
    }
    // Clean commands panel
    
    // Turn off default devices select and create new one
    editor.getConfig().showDevices = 0;
    //let viewPanel = pnm.getPanel('views');
    //viewPanel && updateTooltip(viewPanel.get('buttons'));
  };
