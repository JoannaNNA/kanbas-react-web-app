interface ModuleEditorProps {
    dialogTitle: string;
    moduleName: string;
    setModuleName: (name: string) => void;
    addModule: () => void;  // 这里保持原名以避免修改太多代码
}

export default function ModuleEditor({ 
    dialogTitle, 
    moduleName, 
    setModuleName, 
    addModule 
}: ModuleEditorProps) {
    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault();
        if (moduleName.trim()) {  // 确保有输入内容
            addModule();  // 调用添加函数
        }
    };

    return (
        <div 
            id="wd-add-module-dialog" 
            className="modal fade" 
            data-bs-backdrop="static" 
            data-bs-keyboard="false"
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5">
                            {dialogTitle}
                        </h1>
                        <button 
                            type="button" 
                            className="btn-close" 
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <input 
                            className="form-control" 
                            value={moduleName}
                            onChange={(e) => setModuleName(e.target.value)}
                            placeholder="Quiz Name"
                        />
                    </div>
                    <div className="modal-footer">
                        <button 
                            type="button" 
                            className="btn btn-secondary" 
                            data-bs-dismiss="modal"
                        >
                            Cancel
                        </button>
                        <button 
                            onClick={handleSubmit}
                            type="button" 
                            className="btn btn-danger"
                            data-bs-dismiss="modal"  // 确保点击后关闭模态框
                        >
                            Add Quiz
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}