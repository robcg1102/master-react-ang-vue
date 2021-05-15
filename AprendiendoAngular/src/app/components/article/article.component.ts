import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from "@angular/router";
import swal from 'sweetalert';
import { ArticleService } from "../../services/article.service";
import { Article } from "../../models/article";

import { Global } from "../../services/global"; 

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css'],
  providers: [ArticleService]
})
export class ArticleComponent implements OnInit {
  public article: Article;
  public articleId : string;
  public url: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    public _articleService: ArticleService
  ) {
    this.url = Global.url
   }

  ngOnInit(): void {

    this._route.params.subscribe((params: Params)=>{
      this.articleId = params.id
    });

    this._articleService.getArticle(this.articleId).subscribe(
      response=>{
        if(response.article){
          this.article = response.article
        } else{
          this._router.navigate(['/home']);
        }
        
      },
      error => {
        console.log(error);
        this._router.navigate(['/home']);
      }
    )
  }

  delete(id){

    swal({
      title: "¿Estás seguro de eliminar tu artículo?",
      text: "Una vez eliminado, no vas a poder recuperar tu artículo!",
      icon: "warning",
      buttons: [true, true],
      dangerMode: true,
    })
    .then((willDelete) => {
      if (willDelete) {
        this._articleService.delete(id).subscribe(
          response=>{
            swal("Tu artículo ha sido eliminado!", {
              icon: "success",
            });
            this._router.navigate(['/blog']);
          },
          error=>{
            console.log(error);
            this._router.navigate(['/blog']);
          }
        )
        
      } else {
        swal("Tu artículo no se ha eliminado!");
      }
    });


    
  }

}
