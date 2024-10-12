import { Route, Routes, Navigate, Link } from "react-router-dom";
import "./index.css";
import React from 'react';
import BackgroundColors from './BackgroundColors';
import BootstrapGrids from "./BootstrapGrids";
import Borders from './Borders';
import Corners from './Corners';
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColor from "./ForegroundColor";
import Gridlayout from './Gridlayout';
import Margins from './Margins';
import Padding from './Padding';
import Positions from './Positions';
import ReactIcons from './ReactIcons';
import Zindex from './Zindex';
import ScreenSizeLabel from './ScreenSizeLable';
import BootstrapForms from "./BootstrapForms";
import BootstrapLists from "./BootstrapLists";
import BootstrapTables from "./BootstrapTables";
import BootstrapNavigation from "./BootstrapNavigation";


export default function Lab2() {
  return (
    <div  id="wd-lab2" className="containerlab2">
      
        <ul>
        <li><Link to="foregroundcolor">Foreground Color</Link></li>
        <li><Link to="backgroundcolors">Background Colors</Link></li>
        <li><Link to="borders">Borders</Link></li>
        <li><Link to="padding">Padding</Link></li>
        <li><Link to="margins">Margins</Link></li>
        <li><Link to="corners">Corners</Link></li>
        <li><Link to="dimensions">Dimensions</Link></li>
        <li><Link to="positions">Positions</Link></li>
        <li><Link to="zindex">Z Index</Link></li>
        <li><Link to="float">Float</Link></li>
        <li><Link to="gridlayout">Grid Layout</Link></li>
        <li><Link to="flex">Flex</Link></li>

        <li><Link to="reacticons">React Icons</Link></li>
        <li><Link to="bootstrapgrids">Bootstrap Grids</Link></li>
        <li><Link to="ScreenSizeLabel">Screen Size Label</Link></li>
        <li><Link to="BootstrapTables"> Bootstrap Tables</Link></li>
        <li><Link to="BootstrapLists"> Bootstrap Lists</Link></li>
        <li><Link to="BootstrapForms"> Bootstrap Forms</Link></li>
        <li><Link to="BootstrapNavigation"> Bootstrap Navigation</Link></li>
        
        
        
      </ul>
      <Routes>
        {/* Use relative paths since the base path will be /Labs/Lab2 */}
        <Route path="/" element={<Navigate to="backgroundcolors" />} />
        <Route path="backgroundcolors" element={<BackgroundColors />} />
        <Route path="bootstrapgrids" element={<BootstrapGrids />} />
        <Route path="borders" element={<Borders />} />
        <Route path="corners" element={<Corners />} />
        <Route path="dimensions" element={<Dimensions />} />
        <Route path="flex" element={<Flex />} />
        <Route path="float" element={<Float />} />
        <Route path="foregroundcolor" element={<ForegroundColor />} />
        <Route path="gridlayout" element={<Gridlayout />} />
        <Route path="margins" element={<Margins />} />
        <Route path="padding" element={<Padding />} />
        <Route path="positions" element={<Positions />} />
        <Route path="reacticons" element={<ReactIcons />} />
        <Route path="zindex" element={<Zindex />} />

        <Route path="screensizelabel" element={<ScreenSizeLabel />} />
        <Route path="bootstraptables" element={<BootstrapTables />} />
        <Route path="bootstraplists" element={<BootstrapLists />} />
        <Route path="bootstrapforms" element={<BootstrapForms />} />
        <Route path="bootstrapnavigation" element={<BootstrapNavigation/>} />
      </Routes>

      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        The style attribute allows configuring look and feel right on the element. Although it's very convenient,
        it is considered bad practice and you should avoid using the style attribute.
      </p>

      <div id="wd-css-id-selectors">
        <h3>ID selectors</h3>
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same name, e.g., P, we can refer to a specific element by its ID.
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel.
        </p>
      </div>

      <div id="wd-css-class-selectors">
        <h3>Class selectors</h3>
        <p className="wd-class-selector">
          Instead of using IDs to refer to elements, you can use an element's CLASS attribute.
        </p>
        <h4 className="wd-class-selector">
          This heading has the same style as the paragraph above.
        </h4>
      </div>

      <div id="wd-css-document-structure">
        <div className="wd-selector-1">
          <h3>Document structure selectors</h3>
          <div className="wd-selector-2">
            Selectors can be combined to refer to elements in particular places in the document.
            <p className="wd-selector-3">
              This paragraph's red background is referenced as <br />
              `.selector-2 .selector3` <br />
              meaning the descendant of some ancestor.
            </p>
            <p>
              <span className="wd-selector-4">
                Whereas this span is a direct child of its parent.
              </span>
              <br />
              You can combine these relationships to create specific styles depending on the document structure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
