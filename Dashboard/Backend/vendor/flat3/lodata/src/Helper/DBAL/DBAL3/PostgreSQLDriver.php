<?php

declare(strict_types=1);

namespace Flat3\Lodata\Helper\DBAL\DBAL3;

use Doctrine\DBAL\Driver\AbstractPostgreSQLDriver;

class PostgreSQLDriver extends AbstractPostgreSQLDriver
{
    use ConnectsToDatabase;
}