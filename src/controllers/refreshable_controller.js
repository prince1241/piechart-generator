import { Controller } from "stimulus"
 
export default class extends Controller {
 
  static targets = [ "content" ]
 
  refresh(){
    this.contentTarget.innerHTML = "Refresh!"
  }
 
}