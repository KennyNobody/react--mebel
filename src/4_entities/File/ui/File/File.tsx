import classNames from 'classnames';
import cls from './File.module.scss';
import { FileType } from '../../model/File';

interface FileProps {
    className?: string;
    data: FileType;
}

export const File = (props: FileProps) => {
    const {
        data,
        className,
    } = props;

    return (
        <a
            target="_blank"
            href={data.link}
            rel="nofollow noopener noreferrer"
            className={classNames(cls.link, className)}
        >
            <svg
                fill="none"
                viewBox="0 0 30 30"
                height="30px"
                width="30px"
                className={classNames(cls.icon)}
            >
                <path d="M26.8359 6.92578L20.3027 0.492187C20.2148 0.404297 20.0918 0.351562 19.9629 0.351562H7.91016C6.08789 0.351562 4.61133 1.91016 4.61133 3.83203V15.8571H3.00586V25.3828H4.61133V26.168C4.61133 28.084 6.09375 29.6484 7.91016 29.6484H23.6953C25.5176 29.6484 26.9941 28.0898 26.9941 26.168V7.30664C26.9941 7.16602 26.9414 7.02539 26.8359 6.92578ZM19.7988 1.42969L25.4824 7.03125H22.3887C20.959 7.03125 19.7988 5.88867 19.7988 4.48828V1.42969ZM25.998 26.168C25.998 27.5098 24.9668 28.5996 23.6953 28.5996H7.91016C6.63867 28.5996 5.60742 27.5098 5.60742 26.168V25.3828H20.5C22.6387 25.3828 24.5 23.4023 24.5 21C24.5 17.9707 22.6328 15.8571 20.5 15.8571H5.60742V3.83203C5.60742 2.49023 6.63867 1.40039 7.91016 1.40039H18.8027V4.48828C18.8027 6.46875 20.4082 8.08008 22.3887 8.08008H25.998V26.168ZM17.5254 21.7852C17.4358 21.5163 17.5766 25.5249 17.5254 21.7852Z" fill="#87B6FD"/>
                <text
                    x="4"
                    y="23"
                    fill="#ffffff"
                    fontSize="8"
                    fontWeight="300"
                >
                    PDF
                </text>
            </svg>
            <span className={classNames(cls.title)}>
                { data.title }
            </span>
        </a>
    );
};
