var Page = require('../model/page');

exports.dashboard =  function(req, res, next) {
    res.render('admin/dashboard', { title: 'Welcome Admin' });
  };

  // Get add page
exports.add_page =  function(req, res, next) {
        var title = '';
        var slug = '';
        var content = '';

    res.render('admin/add-page', { title: 'title',slug : 'slug',content: 'content'  });
  };

exports.post_add_page =  (req, res) => {
     var title = req.body.title;
    var slug = req.body.slug.replace(/\s+/g,'-').toLowerCase();
    if (slug ="") slug = title.replace(/\s+/g,'-').toLowerCase();
    var content = req.body.content;
    //var errors = req.validationErrors();
    page.findOne({slug,slug}, (err,page)=>{
      if(page){
        req.flash('danger','Page slug already exist');
        res.render('admin/pages',{
          title : title,
          slug : slug,
          content : content
        });
      }else{
        var page = new Page({
          title : title,
          slug : slug,
          content : content
        });
        page.save((err)=>{
          if(err) console.log(err);
          req.flash('success','page added');
          res.redirect('admin/pages');

        })

        
      }

    })
    
   
  };