import React from 'react';
class Grid extends React.Component {
    toCssColsClasses(cols) {
        const classCols = cols ? cols.split(' ') : [];
        let classes = "";
        if (classCols[0]) classes += `col-xs-${classCols[0]}`;
        if (classCols[1]) classes += ` col-sm-${classCols[1]}`;
        if (classCols[2]) classes += ` col-md-${classCols[2]}`;
        if (classCols[3]) classes += ` col-lg-${classCols[3]}`;
        return classes;
    }
    render() {
        const gridClasses = this.toCssColsClasses(this.props.cols || "12");
        return (
            <div className={gridClasses}>
                {this.props.children}
            </div>
        )
    }
};
export default Grid;