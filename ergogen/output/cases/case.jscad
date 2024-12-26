function baseplate_extrude_1_outline_fn(){
    return new CSG.Path2D([[225.6,-92.991614],[225.6,-45]]).appendArc([224.6,-44],{"radius":1,"clockwise":false,"large":false}).appendPoint([186.5,-44]).appendPoint([186.5,-42.5]).appendArc([185.5,-41.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([167.5,-41.5]).appendPoint([167.5,-37.5]).appendArc([166.5,-36.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([147.5,-36.5]).appendArc([146.5,-37.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([146.5,-46.5]).appendPoint([128.5,-46.5]).appendArc([127.5,-47.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([127.5,-51.5]).appendPoint([90.5,-51.5]).appendArc([89.5,-52.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([89.5,-109.5]).appendArc([90.5,-110.5],{"radius":1,"clockwise":false,"large":false}).appendPoint([128.5,-110.5]).appendArc([129.0046769,-110.3633083],{"radius":1,"clockwise":false,"large":false}).appendPoint([186.8432795,-125.8611152]).appendPoint([200.9279082,-133.9928794]).appendArc([202.2939325,-133.6268559],{"radius":1,"clockwise":false,"large":false}).appendPoint([202.3189326,-133.5835547]).appendPoint([225.4660254,-93.491614]).appendArc([225.6,-92.991614],{"radius":1,"clockwise":false,"large":false}).close().innerToCAG()
.extrude({ offset: [0, 0, 1] });
}




                function case_case_fn() {
                    

                // creating part 0 of case case
                let case__part_0 = baseplate_extrude_1_outline_fn();

                // make sure that rotations are relative
                let case__part_0_bounds = case__part_0.getBounds();
                let case__part_0_x = case__part_0_bounds[0].x + (case__part_0_bounds[1].x - case__part_0_bounds[0].x) / 2
                let case__part_0_y = case__part_0_bounds[0].y + (case__part_0_bounds[1].y - case__part_0_bounds[0].y) / 2
                case__part_0 = translate([-case__part_0_x, -case__part_0_y, 0], case__part_0);
                case__part_0 = rotate([0,0,0], case__part_0);
                case__part_0 = translate([case__part_0_x, case__part_0_y, 0], case__part_0);

                case__part_0 = translate([0,0,0], case__part_0);
                let result = case__part_0;
                
            
                    return result;
                }
            
            
        
            function main() {
                return case_case_fn();
            }

        