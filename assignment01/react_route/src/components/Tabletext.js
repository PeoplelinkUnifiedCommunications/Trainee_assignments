import React from 'react';
import "./Tabletext.css";

function Tabletext() {
    return (
        <>
        <div className="container">
                <table>
                <tr>
           <th>S.No</th>
           <th>HTML Tag</th>
           <th>Output</th>
       </tr>  
       <tr>
           <td>1</td>
           <td>Normal text</td>
           <td>Hello World!</td>
       </tr>
       <tr>
           <td>2</td>
           <td>&lt;B&gt;&lt;/B&gt;</td>
           <td><b>Bold</b></td>
       </tr>
       <tr>
           <td>3</td>
           <td>&lt;I&gt;&lt;/I&gt;</td>
           <td><i>Italic</i></td>
       </tr>
       <tr>
           <td>4</td>
           <td>&lt;U&gt;&lt;/U&gt;</td>
           <td><u>Underline</u></td>
       </tr>
       <tr>
           <td>5</td>
           <td>&lt;EM&gt;&lt;/EM&gt;</td>
           <td><em>Emphasis</em></td>
       </tr>
       <tr>
           <td>6</td>
           <td>&lt;STRONG&gt;&lt;/STRONG&gt;</td>
           <td><strong>STRONG</strong></td>
       </tr>
       <tr>
           <td>7</td>
           <td>&lt;TELETYPE&gt;&lt;/TELETYPE&gt;</td>
           <td><teletype>TELETYPE</teletype></td>
       </tr>
       <tr>
           <td>8</td>
           <td>&lt;CITE&gt;&lt;/CITE&gt;</td>
           <td><cite>Citation</cite></td>
       </tr>
       <tr>
           <td>9</td>
           <td>&lt;STRIKE&gt;&lt;/STRIKE&gt;</td>
           <td><strike>strike throught text</strike></td>
       </tr>
       <tr>
           <td>10</td>
           <td>&lt;BIG&gt;&lt;/BIG&gt;</td>
           <td><big>text in a big font</big></td>
       </tr>
       <tr>
           <td>11</td>
           <td>&lt;SMALL&gt;&lt;/SMALL&gt;</td>
           <td><small>text in a small font</small></td>
       </tr>
       <tr>
           <td>12</td>
           <td>&lt;SUB&gt;&lt;/SUB&gt;</td>
           <td>a<sub> b</sub></td>
       </tr>
       <tr>
           <td>13</td>
           <td>&lt;SUP&gt;&lt;/SUP&gt;</td>
           <td>a<sup> b</sup></td>
       </tr>
                </table>
            </div>
            </>
    )
}


export default Tabletext;