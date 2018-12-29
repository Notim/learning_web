<?   
    $urlJson = "";    
    $urlImg = "";
    if(in_array("M", $_REQUEST)){
        $urlJson = "assets/etc/data/itens-masculinos.json";
        $urlImghd  = "masculino/hd/";
        $urlImgthumb  = "masculino/thumb/";
        $flag="m";
    }else{
        $urlJson = "assets/etc/data/itens-femininos.json" ;        
        $urlImghd  = "feminino/hd/";
        $urlImgthumb  = "feminino/thumb/";
        $flag="f";
    }
    $externalJSON = file_get_contents ($urlJson);        
    $array = array();        
    $array= json_decode($externalJSON, true);    
?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0">        
        
        <link rel="stylesheet" type="text/css" href="lib/bootstrap/v4.1/dist/css/bootstrap.css">
        <link rel="stylesheet" type="text/css" href="lib/fontawesome/v5.3/css/all.css">        
        <link rel="stylesheet" type="text/css" href="lib/slick/v1.8/slick/slick.css">  

        <link rel="stylesheet" type="text/css" href="assets/css/slick-custom-theme.css">
        <link rel="stylesheet" type="text/css" href="assets/css/main.css">
        
        <script type="text/javascript" src="lib/jquery/v3.3/dist/jquery.js"></script>
        <script type="text/javascript" src="lib/bootstrap/v4.1/dist/js/bootstrap.js"></script>
        <script type="text/javascript" src="lib/slick/v1.8/slick/slick.js"></script>        
                
    </head>
    <body class="container-fluid">        
        <div id="anchor" class="header">            
            <div class="menu">
                <a  class='pull-left  <?=$flag=="m" ? "active" : "" ?>' href="?_=M" >Masculino</a>    
                <a  class='pull-right <?=$flag=="f" ? "active" : "" ?>' href="?_=F">Feminino</a>                    
            </div>
        </div>        
      
        
        <div id="content" style="position: relative;">
            <a href="javascript:(0);" class="slick-prev slick-arrow altprev hide-600"></a>
            <a href="javascript:(0);" class="slick-next slick-arrow altnext hide-600"></a>               

            <div class="main" id="main_slider">         
                <?foreach($array as $key => $slider){?>                                                          
                    <div><img class="img-slider"  data-lazy="assets/img/<?=$urlImghd.$slider['id'];?>.jpg" onclick="window.open('<?=$slider['link'];?>');"></div> 
                <?}?>                
            </div>
        </div>
        <div class="thumbs hide-600" id="thumbs_itens_Slider">
            <?foreach($array as $key => $slider){?>                                                                              
                <div href="#anchor" class="img-thumb">
                    <img src="assets/img/<?=$urlImgthumb.$slider['id'];?>.jpg" title="<?=$slider['title'];?>"/>
                </div>
            <?}?>
        </div>
        <div class="mobile-thumbs show-600">
            <?foreach($array as $key => $slider){?>                                                                              
                <div class="img-thumb-mobile"><img src="assets/img/<?=$urlImgthumb.$slider['id'];?>.jpg"/></div>
            <?}?>
        </div>                    
    </body>
    <script type="text/javascript" src="assets/js/main.js" ></script>
</html>
