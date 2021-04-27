import File from '../../../assest/file.png'
import Folder from '../../../assest/folder.png'
import { FileWrapper, FinderFilesWindow } from "../LunchedApp.sytle";

const FilesWrapper  = () => {

    return (
        <FinderFilesWindow>
            <FileWrapper>
                <img src={Folder} alt='folder' />
                <span>Documents</span>
            </FileWrapper><FileWrapper>
                <img src={Folder} alt='folder' />
                <span>Downloads</span>
            </FileWrapper>
            <FileWrapper>
                <img src={File} alt='file' />
                <span>text.txt</span>
            </FileWrapper>
        </FinderFilesWindow>
    )
}

export default FilesWrapper;